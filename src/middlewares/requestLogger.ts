import { Context, MiddlewareFn } from 'telegraf';

export const requestLogger: MiddlewareFn<Context> = async (ctx, next) => {
  const updateType = ctx.updateType;
  const userId = ctx.from?.id ?? 'unknown';

  console.log(`[update] type=${updateType} user=${userId}`);

  await next();
};
