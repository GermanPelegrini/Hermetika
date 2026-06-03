import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";
import { env } from "../env.js";

export function resolveDatabaseFile() {
  return resolve(process.cwd(), env.DATABASE_FILE);
}

export function openDatabase() {
  const file = resolveDatabaseFile();

  mkdirSync(dirname(file), {
    recursive: true
  });

  return new DatabaseSync(file);
}
