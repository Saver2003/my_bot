import { Telegraf } from 'telegraf';

export function attachGlobalErrorHandler(bot: Telegraf): void {
  bot.catch((err, ctx) => {
    console.error(`Bot error for update ${ctx.update.update_id}:`, err);
  });
}
