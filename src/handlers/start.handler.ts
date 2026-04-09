import { Scenes, Telegraf } from 'telegraf';
import { startKeyboard } from '../utils/keyboards';

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
      '❓ <b>Как это работает</b>\n\n' +
        '1. Скопируй шаблон в свой Notion\n' +
        '2. Настрой под себя за 10 минут\n' +
        '3. Начни пользоваться прямо сегодня',
    );
  });
}
