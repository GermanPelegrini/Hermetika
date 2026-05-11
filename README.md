# HERMETIKA

Hermetika is a loyalty infrastructure platform for businesses that need modern, customizable retention systems across points, purchases, rewards, and customer engagement.

## Monorepo structure

- `apps/web`: customer and business-facing web app
- `apps/android`: Android mobile app for the customer wallet and on-the-go loyalty flows
- `apps/api`: backend API, auth, loyalty engine, analytics hooks
- `packages/config`: shared TypeScript and lint configuration
- `packages/types`: shared domain types
- `docs`: product and architecture notes

## Core domains

- businesses
- customers
- loyalty programs
- points ledger
- purchases
- rewards
- redemptions
- campaigns and promotions
- analytics

## Suggested product surfaces

- business dashboard
- customer wallet
- Android mobile wallet
- rewards catalog
- purchases history
- loyalty rules management
- retention and engagement analytics

## Platform scope

- web for business administration and shared customer access
- Android as the first mobile client
- backend services that support both clients with the same loyalty domain

## Development flow

- `main`: stable integration branch
- `develop`: active development branch

## Next implementation milestones

1. Bootstrap the web app shell and design system.
2. Bootstrap the Android app shell and shared mobile domain contracts.
3. Implement API modules for auth, businesses, customers, and loyalty programs.
4. Add a points ledger model and rewards redemption flow.
5. Connect analytics and reporting primitives.
