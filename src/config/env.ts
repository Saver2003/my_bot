export interface EnvConfig {
  botToken: string;
}

export function loadEnv(): EnvConfig {
  const botToken = process.env.BOT_TOKEN;

  if (!botToken) {
    throw new Error('Missing BOT_TOKEN in environment variables');
  }

  return { botToken };
}
