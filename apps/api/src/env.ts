import { config } from "dotenv";
import { z } from "zod";

config({
  path: new URL("../../../.env", import.meta.url)
});

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  API_PORT: z.coerce.number().default(4000),
  WEB_URL: z.string().url().default("http://localhost:5173"),
  DATABASE_FILE: z.string().min(1),
  JWT_SECRET: z.string().min(8)
});

export const env = envSchema.parse(process.env);
