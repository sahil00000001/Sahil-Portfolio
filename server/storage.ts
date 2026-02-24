import { db } from "./db";
import {
  projects,
  skills,
  experiences,
  services,
  contactMessages,
  type Project,
  type InsertProject,
  type Skill,
  type InsertSkill,
  type Experience,
  type InsertExperience,
  type Service,
  type InsertService,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getExperiences(): Promise<Experience[]>;
  getServices(): Promise<Service[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.order);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills).orderBy(skills.order);
  }

  async getExperiences(): Promise<Experience[]> {
    return await db.select().from(experiences).orderBy(experiences.order);
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services).orderBy(services.order);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [inserted] = await db.insert(contactMessages).values(message).returning();
    return inserted;
  }
}

export const storage = new DatabaseStorage();
