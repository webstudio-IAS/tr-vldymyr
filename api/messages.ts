import type { VercelRequest, VercelResponse } from "@vercel/node";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

const insertMessageSchema = createInsertSchema(messages).omit({
  id: true,
  createdAt: true,
});

const { Pool } = pg;

let pool: pg.Pool | null = null;

function getDb() {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return drizzle(pool, { schema: { messages } });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const input = insertMessageSchema.parse(req.body);
    const db = getDb();
    const [newMessage] = await db.insert(messages).values(input).returning();
    return res.status(201).json(newMessage);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: err.errors[0].message,
        field: err.errors[0].path.join("."),
      });
    }
    console.error("Error creating message:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
