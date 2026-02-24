import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { db } from "./db";
import { projects, skills, experiences, services } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.projects.list.path, async (req, res) => {
    const data = await storage.getProjects();
    res.json(data);
  });

  app.get(api.skills.list.path, async (req, res) => {
    const data = await storage.getSkills();
    res.json(data);
  });

  app.get(api.experiences.list.path, async (req, res) => {
    const data = await storage.getExperiences();
    res.json(data);
  });

  app.get(api.services.list.path, async (req, res) => {
    const data = await storage.getServices();
    res.json(data);
  });

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Seed data function
  async function seed() {
    const existingProjects = await storage.getProjects();
    if (existingProjects.length === 0) {
      await db.insert(projects).values([
        { 
          title: "WLS Enterprise Integration", 
          description: "Led a team of 5 to architect and deploy 10+ RESTful APIs for Westminster Legalisation Services, ensuring 100% on-time delivery.", 
          imageUrl: "https://images.unsplash.com/photo-1551288049-bbda38a594a0", 
          technologies: ["ASP.NET Core 8", "React", "TypeScript", "Redux"], 
          featured: true, 
          order: 1 
        },
        { 
          title: "Production-Ready REST APIs", 
          description: "Architected and deployed 35+ production-ready RESTful APIs across ASP.NET Core and Spring Boot platforms.", 
          imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904", 
          technologies: ["Spring Boot", "Java", "ASP.NET Core", "SQL Server"], 
          featured: true, 
          order: 2 
        }
      ]);

      await db.insert(skills).values([
        { name: "Java", category: "Programming Languages", icon: "Code2", proficiency: 95, order: 1 },
        { name: "JavaScript", category: "Programming Languages", icon: "Code2", proficiency: 92, order: 2 },
        { name: "TypeScript", category: "Programming Languages", icon: "Code2", proficiency: 90, order: 3 },
        { name: "ASP.NET Core", category: "Backend", icon: "Server", proficiency: 94, order: 4 },
        { name: "Spring Boot", category: "Backend", icon: "Server", proficiency: 88, order: 5 },
        { name: "ReactJS", category: "Frontend", icon: "Monitor", proficiency: 92, order: 6 },
        { name: "AWS", category: "Cloud", icon: "Cloud", proficiency: 85, order: 7 }
      ]);

      await db.insert(experiences).values([
        { 
          title: "Full Stack Developer", 
          company: "PodTech", 
          period: "Jan 2025 - Present", 
          description: "Architected 10+ RESTful APIs using ASP.NET Core 8. Led WLS project integration managing a team of 5 developers. Optimized data operations by 35%.", 
          order: 1 
        },
        { 
          title: "Software Developer", 
          company: "LTIMindtree", 
          period: "Nov 2024 - Jan 2025", 
          description: "Developed 5+ RESTful APIs using Spring Boot and Java. Reduced API response time by 20% and increased data processing efficiency by 30%.", 
          order: 2 
        }
      ]);

      await db.insert(services).values([
        { title: "Full Stack Development", description: "Immersive UI with React and robust backend with .NET/Java.", icon: "Layout", order: 1 },
        { title: "Cloud-Native Apps", description: "Scalable solutions deployed on AWS and Azure infrastructure.", icon: "Cloud", order: 2 },
        { title: "Microservices Design", description: "Architecting distributed systems with high availability.", icon: "Share2", order: 3 },
        { title: "API Development", description: "Building secure, high-performance RESTful APIs.", icon: "Terminal", order: 4 }
      ]);
    }
  }

  seed().catch(console.error);

  return httpServer;
}
