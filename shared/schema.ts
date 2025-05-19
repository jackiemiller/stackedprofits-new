import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull(),
  websiteType: text("website_type").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  rating: text("rating").notNull(),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  sortOrder: text("sort_order"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const leadInsertSchema = createInsertSchema(leads, {
  fullName: (schema) => schema.min(2, "Name must be at least 2 characters"),
  email: (schema) => schema.email("Must provide a valid email"),
  phone: (schema) => schema.min(10, "Phone number must be at least 10 digits"),
  websiteType: (schema) => schema.min(1, "Website type is required"),
});

export type LeadInsert = z.infer<typeof leadInsertSchema>;
export type Lead = typeof leads.$inferSelect;

export type Testimonial = typeof testimonials.$inferSelect;
export type FAQ = typeof faqs.$inferSelect;
