import { Telegraf } from 'telegraf';
import { attachGlobalErrorHandler } from '../middlewares/errorBoundary';
import { requestLogger } from '../middlewares/requestLogger';

export function registerMiddlewares(bot: Telegraf): void {
  attachGlobalErrorHandler(bot);
  bot.use(requestLogger);
}
