// filepath: apps/news/lib/db.ts
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set. Ensure .env.local exists in apps/news with your Supabase URI.");
}

// Disable prefetch for Supabase Transaction Pooler (Port 6543)
const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client, { schema });