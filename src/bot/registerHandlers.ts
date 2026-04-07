import { Telegraf } from 'telegraf';
import { registerPingCommand } from '../commands/ping';
import { registerStartCommand } from '../commands/start';

export function registerHandlers(bot: Telegraf, adminId?: number): void {
  registerStartCommand(bot, adminId);
  registerPingCommand(bot);
}
