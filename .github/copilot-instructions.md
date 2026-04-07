# Project Guidelines

## Code Style
- Use TypeScript for runtime code and keep modules small and single-purpose.
- Prefer clear async handler functions for bot commands and middleware.
- Keep markdown and source files in UTF-8 encoding.

## Architecture
- This project is a Telegram bot built with Telegraf and dotenv.
- Load environment variables at startup before bot initialization.
- Keep secrets in .env files and never commit tokens.
- Keep transport and command logic separated as the codebase grows.

## Build and Test
- Install dependencies with npm install.
- Use npm run dev for local development with watch mode.
- Use npm run build to compile TypeScript into dist and npm run start to run compiled output.
- Keep npm run test defined, even if it is a lightweight placeholder early in the project.

## Conventions
- Treat package.json as the source of truth for runnable commands and dependencies.
- Update README.md whenever setup steps or required environment variables change.
- Prefer linking to docs instead of duplicating long guidance in instruction files.
