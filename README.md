# my_bot

Telegram bot on Telegraf with TypeScript support.

## Booking Flow

- /start or /book - starts salon booking flow
- /cancel - cancels current booking flow
- Admin sees button "Остановить бота" when ADMIN_ID is configured
- Bot asks: name, service, and booking date (DD.MM.YYYY)
- Services: Стрижка, Бритье, Маникюр, Массаж

## Setup

1. Install dependencies:

npm install

2. Create environment file:

Copy .env.example to .env and set BOT_TOKEN.
Set ADMIN_ID to your Telegram numeric user id if you want the stop button.

3. Run in development mode:

npm run dev

## Scripts

- npm run dev - run bot with tsx in watch mode
- npm run build - compile TypeScript to dist/
- npm run start - run compiled bot from dist/
- npm run test - placeholder test command
