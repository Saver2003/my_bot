import { Scenes, Telegraf } from 'telegraf';
import { startKeyboard, segmentKeyboard } from '../utils/keyboards';

export function registerStartHandler(bot: Telegraf<Scenes.WizardContext>): void {
  bot.start(async (ctx) => {
    await ctx.replyWithHTML(
      '🧠 <b>Хочешь систему, которая организует твою жизнь за 10 минут?</b>\n\n' +
        'Этот Notion шаблон поможет тебе навести порядок в задачах, целях и проектах — без лишних усилий.\n\n' +
        '<b>Что внутри:</b>\n' +
        '• Трекер задач и привычек\n' +
        '• Планировщик недели и месяца\n' +
        '• База проектов и целей\n' +
        '• Готовые страницы для быстрого старта\n\n' +
        '👇 Нажми ниже, чтобы посмотреть',
      startKeyboard(),
    );
  });

  bot.action('view_template', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML('🚀 <b>Шаблон</b>\n\nСсылка на шаблон: <i>скоро будет доступна</i>');
  });

  bot.action('how_it_works', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      '📖 <b>Как это работает</b>\n\n' +
        '<b>Что такое Notion?</b>\n' +
        'Notion — это универсальное приложение для заметок, задач и проектов. Всё в одном месте, работает на любом устройстве.\n\n' +
        '<b>Кому подходит:</b>\n' +
        '• Тем, кто теряется в задачах и не знает, с чего начать\n' +
        '• Тем, кто уже пробовал другие инструменты, но они не прижились\n' +
        '• Всем, кто хочет видеть свои цели и дела в одном месте\n\n' +
        '<b>Какой результат:</b>\n' +
        '✅ Ясность — ты знаешь, что делать сегодня\n' +
        '✅ Спокойствие — ничего не забыто и не потеряно\n' +
        '✅ Прогресс — видишь, как двигаешься к целям\n\n' +
        '👇 Выбери, что подходит тебе:',
      segmentKeyboard(),
    );
  });

  bot.action('segment_beginner', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      '🌱 <b>Отлично, ты новичок!</b>\n\n' +
        'Не переживай — шаблон сделан специально для тех, кто только знакомится с Notion.\n\n' +
        'Всё уже настроено: просто скопируй и начни заполнять. Никаких сложных настроек.\n\n' +
        '🚀 Готов попробовать?',
      startKeyboard(),
    );
  });

  bot.action('segment_advanced', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.replyWithHTML(
      '⚡️ <b>Уже используешь Notion — отлично!</b>\n\n' +
        'Этот шаблон сэкономит тебе часы настройки. Бери готовую структуру и адаптируй под свою систему.\n\n' +
        'Внутри: проверенная архитектура страниц, связи между базами и готовые фильтры.\n\n' +
        '🚀 Посмотреть шаблон?',
      startKeyboard(),
    );
  });
}
