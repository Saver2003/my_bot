import { config } from 'dotenv';
import { Scenes, session, Telegraf } from 'telegraf';
import { loadEnv } from '../config/env';
import { attachGlobalErrorHandler } from '../middlewares/errorBoundary';
import { requestLogger } from '../middlewares/requestLogger';
import { registerStartHandler } from '../handlers/start.handler';
import { registerOnboardingHandler } from '../handlers/onboarding.handler';
import { registerDemoHandler } from '../handlers/demo.handler';
import { registerPaymentHandler } from '../handlers/payment.handler';
import { demoScene } from '../scenes/demo.scene';
import { checkoutScene } from '../scenes/checkout.scene';

type BotContext = Scenes.WizardContext;

export async function startApp(): Promise<void> {
  config();
  const { botToken } = loadEnv();

  const bot = new Telegraf<BotContext>(botToken);
  const stage = new Scenes.Stage<BotContext>([demoScene, checkoutScene]);

  attachGlobalErrorHandler(bot);
  bot.use(requestLogger);
  bot.use(session());
  bot.use(stage.middleware());

  registerStartHandler(bot);
  registerOnboardingHandler(bot);
  registerDemoHandler(bot);
  registerPaymentHandler(bot);

  await bot.launch();
}
