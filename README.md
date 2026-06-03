# HERMETIKA

Hermetika is a local-first monorepo scaffold for a loyalty platform where:

- customers track their loyalty progress in one app
- affiliated businesses register purchases digitally
- the backend owns domain rules, persistence, and future integrations

This repository is prepared for development without external services. It runs with:

- `apps/web`: React + Vite business dashboard shell
- `apps/android`: Expo mobile shell for the customer wallet
- `apps/api`: Fastify API with local SQLite bootstrap
- `packages/types`: shared domain contracts
- `packages/config`: shared app configuration and business rules

## Local development stack

- Web: React + Vite + TypeScript
- API: Fastify + SQLite (`node:sqlite`) + TypeScript
- Android: Expo + React Native
- Shared domain: workspace packages

## Quick start

1. Copy `.env.example` to `.env`
2. Install dependencies:

```bash
npm.cmd install
```

3. Generate and create the local database:

```bash
npm.cmd run db:setup
```

4. Start API and web together:

```bash
npm.cmd run dev
```

5. Start Android separately:

```bash
npm.cmd run dev:android
```

## Available scripts

- `npm.cmd run dev`: runs API + web
- `npm.cmd run dev:web`
- `npm.cmd run dev:api`
- `npm.cmd run dev:android`
- `npm.cmd run typecheck`
- `npm.cmd run build`
- `npm.cmd run db:setup`

## Development notes

- No hosted database is required for the initial phase.
- The local database lives at `apps/api/data/hermetika.db`.
- The API exposes local bootstrap endpoints under `/api`.
- The web shell already consumes the local API bootstrap route.
- The mobile app already consumes shared config and domain assumptions.

## Current domain focus

- roles: `user`, `business`
- purchase registration methods: `ticket`, `code`, `qr`
- loyalty model: purchase-count tracking
- one active customer device at a time
- one business login for now, with future room for multi-session auditing

## Next implementation targets

1. Add local auth flows for `user` and `business`
2. Implement business verification and profile onboarding
3. Add QR token generation and regeneration
4. Implement purchase registration and progress counters
5. Connect the mobile and web shells to real API modules
