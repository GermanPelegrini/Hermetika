export type LoyaltyRuleType =
  | "points_per_amount_spent"
  | "points_per_purchase"
  | "reward_after_n_purchases"
  | "custom_promotion";

export interface LoyaltyProgram {
  id: string;
  businessId: string;
  name: string;
  ruleType: LoyaltyRuleType;
  isActive: boolean;
}

export interface Reward {
  id: string;
  businessId: string;
  title: string;
  pointsCost?: number;
  purchasesRequired?: number;
  isActive: boolean;
}
