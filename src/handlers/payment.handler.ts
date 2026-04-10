import { Scenes, Telegraf } from 'telegraf';
import { offerKeyboard } from '../utils/keyboards';
import { offerMessage } from '../utils/messages';

export function registerPaymentHandler(bot: Telegraf<Scenes.WizardContext>): void {
  bot.action('get_price', async (ctx) => {
    await ctx.answerCbQuery();
    await ctx.editMessageText(offerMessage, {
      parse_mode: 'HTML',
      reply_markup: offerKeyboard().reply_markup,
    });
  });

  // TODO: добавить обработчики для 'buy' и 'ask_question'
}
