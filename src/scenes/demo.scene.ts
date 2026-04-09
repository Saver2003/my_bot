import { Scenes } from 'telegraf';

export const demoScene = new Scenes.WizardScene<Scenes.WizardContext>(
  'demo',
  async (ctx) => {
    await ctx.reply('Demo scene. TODO');
    return ctx.scene.leave();
  }
);
