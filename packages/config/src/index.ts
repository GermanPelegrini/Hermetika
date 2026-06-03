export const appConfig = {
  name: "Hermetika",
  tagline: "Fidelity tracking for customers and affiliated businesses.",
  webNavigation: [
    "Overview",
    "Programs",
    "Purchases",
    "Customers",
    "Settings"
  ],
  mobileSections: [
    "My QR",
    "Progress",
    "Purchases",
    "Rewards"
  ],
  businessRules: [
    "A business must be a real operation with a verified owner and address.",
    "A customer can only keep one account active on one device at a time.",
    "Hermetika tracks loyalty programs, not general-purpose discount coupons."
  ]
} as const;

export const developmentConfig = {
  apiPort: 4000,
  webPort: 5173,
  currency: "ARS"
} as const;
