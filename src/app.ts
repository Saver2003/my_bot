import 'dotenv/config';
import { createBot } from './bot/createBot';
import { loadEnv } from './config/env';

export async function startApp(): Promise<void> {
  const { botToken } = loadEnv();
  const bot = createBot(botToken);

  await bot.launch();

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}
