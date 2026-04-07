import { Telegraf } from 'telegraf';

export function registerPingCommand(bot: Telegraf): void {
  bot.command('ping', async (ctx) => {
    await ctx.reply('pong');
  });
}
