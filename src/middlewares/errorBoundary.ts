import { Context, Telegraf } from 'telegraf';

export function attachGlobalErrorHandler<C extends Context>(bot: Telegraf<C>): void {
  bot.catch((err, ctx) => {
    console.error(`Bot error for update ${ctx.update.update_id}:`, err);
  });
}
