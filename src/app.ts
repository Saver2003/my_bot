import 'dotenv/config';
import { createBot } from './bot/createBot';
import { loadEnv } from './config/env';

export async function startApp(): Promise<void> {
  const { botToken, adminId } = loadEnv();
  const bot = createBot(botToken, adminId);

  await bot.launch();

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
}
