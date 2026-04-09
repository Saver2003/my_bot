import { Markup } from 'telegraf';

export function startKeyboard(): ReturnType<typeof Markup.inlineKeyboard> {
  return Markup.inlineKeyboard([
    [Markup.button.callback('🚀 Посмотреть шаблон', 'view_template')],
    [Markup.button.callback('❓ Как это работает', 'how_it_works')],
  ]);
}
