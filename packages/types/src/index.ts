export type UserRole = "user" | "business";

export type PurchaseMethod = "ticket" | "code" | "qr";

export type ProgramProgressMode = "purchase_count";

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  fullName: string;
  phone?: string | null;
}

export interface BusinessProfile {
  id: string;
  ownerUserId: string;
  businessName: string;
  ownerFullName: string;
  address: string;
  phone?: string | null;
  verified: boolean;
}

export interface LoyaltyProgram {
  id: string;
  businessId: string;
  name: string;
  progressMode: ProgramProgressMode;
  requiredPurchases: number;
  rewardDescription: string;
  active: boolean;
}

export interface PurchaseRecord {
  id: string;
  userId: string;
  businessId: string;
  loyaltyProgramId: string;
  purchaseMethod: PurchaseMethod;
  ticketNumber?: string | null;
  businessCode?: string | null;
  qrTokenId?: string | null;
  createdAt: string;
}

export interface ApiHealthResponse {
  status: "ok";
  service: string;
  timestamp: string;
}

export interface BootstrapSummary {
  appName: string;
  roles: UserRole[];
  purchaseMethods: PurchaseMethod[];
  modules: string[];
}
