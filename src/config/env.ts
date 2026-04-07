export interface EnvConfig {
  botToken: string;
  adminId?: number;
}

export function loadEnv(): EnvConfig {
  const botToken = process.env.BOT_TOKEN;
  const adminIdRaw = process.env.ADMIN_ID;

  if (!botToken) {
    throw new Error('Missing BOT_TOKEN in environment variables');
  }

  if (!adminIdRaw) {
    return { botToken };
  }

  const adminId = Number(adminIdRaw);

  if (!Number.isInteger(adminId) || adminId <= 0) {
    throw new Error('ADMIN_ID must be a positive integer');
  }

  return { botToken, adminId };
}
