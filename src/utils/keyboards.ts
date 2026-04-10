import { Markup } from 'telegraf';

export function segmentKeyboard(): ReturnType<typeof Markup.inlineKeyboard> {
  return Markup.inlineKeyboard([
    [Markup.button.callback('🌱 Я новичок', 'segment_beginner')],
    [Markup.button.callback('⚡️ Уже использую Notion', 'segment_advanced')],
  ]);
}

export function beginnerKeyboard(): ReturnType<typeof Markup.inlineKeyboard> {
  return Markup.inlineKeyboard([
    [Markup.button.callback('🚀 Хочу попробовать', 'view_template')],
    [Markup.button.callback('◀️ Назад', 'how_it_works')],
  ]);
}

export function advancedKeyboard(): ReturnType<typeof Markup.inlineKeyboard> {
  return Markup.inlineKeyboard([
    [Markup.button.callback('🚀 Посмотреть шаблон', 'view_template')],
    [Markup.button.callback('◀️ Назад', 'how_it_works')],
  ]);
}

export function demoKeyboard(): ReturnType<typeof Markup.inlineKeyboard> {
  return Markup.inlineKeyboard([
    [Markup.button.callback('💰 Узнать цену', 'get_price')],
    [Markup.button.callback('🔙 Назад', 'how_it_works')],
  ]);
}

export function startKeyboard(): ReturnType<typeof Markup.inlineKeyboard> {
  return Markup.inlineKeyboard([
    [Markup.button.callback('🚀 Посмотреть шаблон', 'view_template')],
    [Markup.button.callback('❓ Как это работает', 'how_it_works')],
  ]);
}

export function offerKeyboard(): ReturnType<typeof Markup.inlineKeyboard> {
  return Markup.inlineKeyboard([
    [Markup.button.callback('💳 Купить', 'buy')],
    [Markup.button.callback('❓ Задать вопрос', 'ask_question')],
  ]);
}
