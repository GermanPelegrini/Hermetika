# Architecture Notes

## Product direction

Hermetika is structured as a centralized loyalty ecosystem with isolated business configurations and a unified customer experience.

## System layers

### Web

- business administration dashboard
- customer wallet and rewards experience
- onboarding, auth, and settings

### API

- authentication and authorization
- tenant-aware business management
- loyalty rules engine
- purchases and points ledger
- rewards catalog and redemption flows
- analytics aggregation

### Shared packages

- domain types
- validation schemas
- shared UI and config, when needed

## Domain boundaries

### Business

Owns branding, loyalty rule configuration, rewards, campaigns, and analytics visibility.

### Customer

Owns identity, wallet state, reward progress, redemption history, and cross-business usage.

### Loyalty engine

Evaluates business rules:

- points per amount spent
- points per purchase
- rewards after N purchases
- custom promotions and temporary campaigns

### Ledger

Tracks immutable point movements and purchase-derived reward events.

## Initial technical direction

- TypeScript across the stack
- workspace-based monorepo
- separate `web` and `api` apps
- shared domain package for loyalty primitives
