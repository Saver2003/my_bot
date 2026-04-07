import { Context, Markup, Telegraf } from 'telegraf';

type ServiceId = 'haircut' | 'shave' | 'manicure' | 'massage';

interface BookingDraft {
  step: 'name' | 'service' | 'date';
  name?: string;
  service?: ServiceId;
}

const serviceLabels: Record<ServiceId, string> = {
  haircut: 'Стрижка',
  shave: 'Бритье',
  manicure: 'Маникюр',
  massage: 'Массаж',
};

const draftsByUserId = new Map<number, BookingDraft>();

function parseDate(input: string): Date | null {
  const normalized = input.trim();
  const match = normalized.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);

  if (!match) {
    return null;
  }

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (date < today) {
    return null;
  }

  return date;
}

async function beginBooking(ctx: Context): Promise<void> {
  if (!ctx.from) {
    return;
  }

  draftsByUserId.set(ctx.from.id, { step: 'name' });

  const controls =
    ctx.from.id === adminId
      ? Markup.inlineKeyboard([
          [Markup.button.callback('🛑 Остановить бота', 'admin:stop_bot')],
        ])
      : undefined;

  await ctx.replyWithHTML(
    '✨ <b>Онлайн-запись в салон</b>\n\n' +
      'Доступные услуги:\n' +
      '• Стрижка\n' +
      '• Бритье\n' +
      '• Маникюр\n' +
      '• Массаж\n\n' +
      '👤 Напишите ваше имя:',
    controls
  );
}

let adminId: number | undefined;

export function registerStartCommand(bot: Telegraf, configuredAdminId?: number): void {
  adminId = configuredAdminId;

  bot.start(async (ctx) => {
    await beginBooking(ctx);
  });

  bot.command('book', async (ctx) => {
    await beginBooking(ctx);
  });

  bot.command('cancel', async (ctx) => {
    if (!ctx.from) {
      return;
    }

    draftsByUserId.delete(ctx.from.id);
    await ctx.replyWithHTML('❌ Запись отменена. Для новой записи используйте /book');
  });

  bot.action('admin:stop_bot', async (ctx) => {
    if (!ctx.from || !adminId || ctx.from.id !== adminId) {
      await ctx.answerCbQuery('Недостаточно прав');
      return;
    }

    await ctx.answerCbQuery('Останавливаю...');
    await ctx.replyWithHTML('🛑 <b>Бот остановлен администратором.</b>');

    bot.stop('ADMIN_STOP');
    setTimeout(() => process.exit(0), 200);
  });

  bot.action(/^service:(haircut|shave|manicure|massage)$/, async (ctx) => {
    if (!ctx.from) {
      return;
    }

    const draft = draftsByUserId.get(ctx.from.id);
    const service = ctx.match[1] as ServiceId;

    if (!draft || draft.step !== 'service') {
      await ctx.answerCbQuery('Запустите запись командой /book');
      return;
    }

    draft.service = service;
    draft.step = 'date';

    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      `📅 Вы выбрали: <b>${serviceLabels[service]}</b>\n\n` +
        'Введите дату записи в формате <b>ДД.ММ.ГГГГ</b>\n' +
        'Например: <b>20.04.2026</b>'
    );
  });

  bot.on('text', async (ctx) => {
    if (!ctx.from) {
      return;
    }

    const text = ctx.message.text.trim();

    if (text.startsWith('/')) {
      return;
    }

    const draft = draftsByUserId.get(ctx.from.id);

    if (!draft) {
      return;
    }

    if (draft.step === 'name') {
      if (text.length < 2) {
        await ctx.replyWithHTML('⚠️ Имя слишком короткое. Введите имя еще раз:');
        return;
      }

      draft.name = text;
      draft.step = 'service';

      await ctx.replyWithHTML(
        '💇 <b>Выберите услугу</b>',
        Markup.inlineKeyboard([
          [Markup.button.callback('Стрижка', 'service:haircut')],
          [Markup.button.callback('Бритье', 'service:shave')],
          [Markup.button.callback('Маникюр', 'service:manicure')],
          [Markup.button.callback('Массаж', 'service:massage')],
        ])
      );

      return;
    }

    if (draft.step === 'date') {
      const bookingDate = parseDate(text);

      if (!bookingDate) {
        await ctx.replyWithHTML(
          '⚠️ Неверная дата. Используйте формат <b>ДД.ММ.ГГГГ</b> и дату не в прошлом.'
        );
        return;
      }

      if (!draft.name || !draft.service) {
        draftsByUserId.delete(ctx.from.id);
        await ctx.replyWithHTML('⚠️ Сессия сброшена. Начните заново: /book');
        return;
      }

      const dateString = text;
      const serviceLabel = serviceLabels[draft.service];

      draftsByUserId.delete(ctx.from.id);

      await ctx.replyWithHTML(
        '✅ <b>Запись подтверждена!</b>\n\n' +
          `👤 Имя: <b>${draft.name}</b>\n` +
          `💅 Услуга: <b>${serviceLabel}</b>\n` +
          `📆 Дата: <b>${dateString}</b>\n\n` +
          'Спасибо! Мы ждем вас в салоне ✨'
      );
    }
  });
}
