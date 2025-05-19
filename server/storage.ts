import { db } from "@db";
import { leads, testimonials, faqs, type LeadInsert } from "@shared/schema";
import { eq } from "drizzle-orm";

export const storage = {
  // Leads
  async insertLead(lead: LeadInsert) {
    return await db.insert(leads).values(lead).returning();
  },
  
  async getAllLeads() {
    return await db.query.leads.findMany({
      orderBy: (leads, { desc }) => [desc(leads.createdAt)]
    });
  },
  
  async getLeadById(id: number) {
    return await db.query.leads.findFirst({
      where: eq(leads.id, id)
    });
  },
  
  // Testimonials
  async getAllTestimonials() {
    return await db.query.testimonials.findMany({
      orderBy: (testimonials, { desc }) => [desc(testimonials.createdAt)]
    });
  },
  
  // FAQs
  async getAllFaqs() {
    return await db.query.faqs.findMany({
      orderBy: (faqs, { asc }) => [asc(faqs.sortOrder)]
    });
  }
};
