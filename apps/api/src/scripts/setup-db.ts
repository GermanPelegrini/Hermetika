import { openDatabase } from "../lib/db.js";

const db = openDatabase();

db.exec(`
  CREATE TABLE IF NOT EXISTS auth_users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('user', 'business')),
    status TEXT NOT NULL DEFAULT 'active',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS user_profiles (
    id TEXT PRIMARY KEY,
    auth_user_id TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    phone TEXT,
    active_device_id TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (auth_user_id) REFERENCES auth_users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS business_profiles (
    id TEXT PRIMARY KEY,
    auth_user_id TEXT NOT NULL UNIQUE,
    business_name TEXT NOT NULL,
    owner_full_name TEXT NOT NULL,
    owner_document_id TEXT,
    address TEXT NOT NULL,
    phone TEXT,
    verified INTEGER NOT NULL DEFAULT 0,
    status_label TEXT NOT NULL DEFAULT 'pending-review',
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (auth_user_id) REFERENCES auth_users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS loyalty_programs (
    id TEXT PRIMARY KEY,
    business_profile_id TEXT NOT NULL,
    name TEXT NOT NULL,
    required_purchases INTEGER NOT NULL,
    reward_description TEXT NOT NULL,
    active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (business_profile_id) REFERENCES business_profiles(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS user_qr_tokens (
    id TEXT PRIMARY KEY,
    auth_user_id TEXT NOT NULL,
    token TEXT NOT NULL UNIQUE,
    active INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    revoked_at TEXT,
    FOREIGN KEY (auth_user_id) REFERENCES auth_users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS purchases (
    id TEXT PRIMARY KEY,
    auth_user_id TEXT NOT NULL,
    business_profile_id TEXT NOT NULL,
    loyalty_program_id TEXT NOT NULL,
    purchase_method TEXT NOT NULL CHECK(purchase_method IN ('ticket', 'code', 'qr')),
    ticket_number TEXT,
    business_code TEXT,
    qr_token_id TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (auth_user_id) REFERENCES auth_users(id) ON DELETE CASCADE,
    FOREIGN KEY (business_profile_id) REFERENCES business_profiles(id) ON DELETE CASCADE,
    FOREIGN KEY (loyalty_program_id) REFERENCES loyalty_programs(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS purchase_progress (
    id TEXT PRIMARY KEY,
    auth_user_id TEXT NOT NULL,
    business_profile_id TEXT NOT NULL,
    loyalty_program_id TEXT NOT NULL,
    total_purchases INTEGER NOT NULL DEFAULT 0,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(auth_user_id, business_profile_id, loyalty_program_id),
    FOREIGN KEY (loyalty_program_id) REFERENCES loyalty_programs(id) ON DELETE CASCADE
  );
`);

db.close();

console.log("Local SQLite database is ready.");
