import { Markup } from 'telegraf';

export function segmentKeyboard(): ReturnType<typeof Markup.inlineKeyboard> {
  return Markup.inlineKeyboard([
    [Markup.button.callback('🌱 Я новичок', 'segment_beginner')],
    [Markup.button.callback('⚡️ Уже использую Notion', 'segment_advanced')],
  ]);
}

export function startKeyboard(): ReturnType<typeof Markup.inlineKeyboard> {
  return Markup.inlineKeyboard([
    [Markup.button.callback('🚀 Посмотреть шаблон', 'view_template')],
    [Markup.button.callback('❓ Как это работает', 'how_it_works')],
  ]);
}
