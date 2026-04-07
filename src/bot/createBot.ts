import { Telegraf } from 'telegraf';
import { registerHandlers } from './registerHandlers';
import { registerMiddlewares } from './registerMiddlewares';

export function createBot(token: string, adminId?: number): Telegraf {
  const bot = new Telegraf(token);
  registerMiddlewares(bot);
  registerHandlers(bot, adminId);
  return bot;
}
