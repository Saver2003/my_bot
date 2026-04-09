import { Scenes } from 'telegraf';

export const checkoutScene = new Scenes.WizardScene<Scenes.WizardContext>(
  'checkout',
  async (ctx) => {
    await ctx.reply('Checkout scene. TODO');
    return ctx.scene.leave();
  }
);
