import { Telegraf } from 'telegraf';
import { registerPingCommand } from '../commands/ping';
import { registerStartCommand } from '../commands/start';

export function registerHandlers(bot: Telegraf): void {
  registerStartCommand(bot);
  registerPingCommand(bot);
}
