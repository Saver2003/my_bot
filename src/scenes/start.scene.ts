import { Scenes } from 'telegraf';

// startScene is no longer used; /start is handled directly in start.handler.ts
export const startScene = new Scenes.WizardScene<Scenes.WizardContext>(
  'start',
  async (ctx) => ctx.scene.leave(),
);
