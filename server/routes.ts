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
          description: "Led a team of 5 developers to architect and deliver the Westminster Legalisation Services integration at PodTech. Deployed 10+ RESTful APIs using ASP.NET Core 8 and ASP.NET MVC, ensuring 100% on-time delivery within strict deadlines. Built scalable React + TypeScript frontend with Redux for API-driven data visualization.",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          technologies: ["ASP.NET Core 8", "ASP.NET MVC", "React", "TypeScript", "Redux", "SQL Server"],
          featured: true,
          order: 1
        },
        {
          title: "Real-Time News Platform — Universal Justice Times",
          description: "Developed a full-stack news website with real-time news fetching via the News API. Built a custom API to transfer and store data in a private database, automating nightly updates and eliminating real-time news sourcing costs entirely.",
          imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
          technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "MySQL", "News API"],
          featured: true,
          order: 2
        },
        {
          title: "Interactive Education Platform — Pepcoding",
          description: "Led a passporting internship project building an interactive video module for seamless student-teacher interaction. Integrated timestamps that increased video engagement by 25%, spiked student enthusiasm by 40%, and triggered a 50% surge in product sales. Added a tagging system to resolve TA confusion and streamline doubt resolution.",
          imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
          technologies: ["Next.js", "JavaScript", "HTML", "CSS", "MySQL", "Bootstrap", "TailwindCSS", "GitHub"],
          featured: true,
          order: 3
        },
        {
          title: "Atlas Sports Labs — Sports Ground Booking Platform",
          description: "Founded and built a sports ground and equipment rental platform focused on affordability, authenticity, and accountability. Features transparent facility access with local connectivity insights, food options, parking info, and special discounts for schools and students.",
          imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
          technologies: ["React", "Node.js", "MySQL", "JavaScript"],
          featured: false,
          order: 4
        },
        {
          title: "Production-Ready RESTful API Suite",
          description: "Architected and deployed 35+ production-ready RESTful APIs across ASP.NET Core and Spring Boot platforms serving thousands of daily requests. Includes API optimization strategies that reduced response times by 20% and improved data processing efficiency by 30%.",
          imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
          technologies: ["Spring Boot", "Java", "ASP.NET Core", "SQL Server", "PostgreSQL", "MySQL"],
          featured: true,
          order: 5
        },
      ]);

      await db.insert(skills).values([
        // Programming Languages
        { name: "Java", category: "Programming Languages", icon: "Code2", proficiency: 95, order: 1 },
        { name: "JavaScript", category: "Programming Languages", icon: "Code2", proficiency: 92, order: 2 },
        { name: "TypeScript", category: "Programming Languages", icon: "Code2", proficiency: 90, order: 3 },
        { name: "Python", category: "Programming Languages", icon: "Code2", proficiency: 82, order: 4 },
        { name: "C++", category: "Programming Languages", icon: "Code2", proficiency: 78, order: 5 },

        // Backend Technologies
        { name: "ASP.NET Core", category: "Backend Technologies", icon: "Server", proficiency: 94, order: 6 },
        { name: "ASP.NET MVC", category: "Backend Technologies", icon: "Server", proficiency: 90, order: 7 },
        { name: "Spring Boot", category: "Backend Technologies", icon: "Server", proficiency: 88, order: 8 },
        { name: "Spring MVC", category: "Backend Technologies", icon: "Server", proficiency: 84, order: 9 },
        { name: "Microservices", category: "Backend Technologies", icon: "Share2", proficiency: 86, order: 10 },
        { name: "Node.js", category: "Backend Technologies", icon: "Server", proficiency: 80, order: 11 },

        // Frontend Technologies
        { name: "ReactJS", category: "Frontend Technologies", icon: "Monitor", proficiency: 92, order: 12 },
        { name: "Redux", category: "Frontend Technologies", icon: "Monitor", proficiency: 88, order: 13 },
        { name: "Next.js", category: "Frontend Technologies", icon: "Monitor", proficiency: 80, order: 14 },
        { name: "HTML5", category: "Frontend Technologies", icon: "Monitor", proficiency: 95, order: 15 },
        { name: "CSS3", category: "Frontend Technologies", icon: "Monitor", proficiency: 90, order: 16 },

        // Databases
        { name: "MySQL", category: "Databases", icon: "Database", proficiency: 88, order: 17 },
        { name: "PostgreSQL", category: "Databases", icon: "Database", proficiency: 85, order: 18 },
        { name: "MongoDB", category: "Databases", icon: "Database", proficiency: 80, order: 19 },
        { name: "SQL Server", category: "Databases", icon: "Database", proficiency: 82, order: 20 },

        // Cloud Platforms
        { name: "AWS", category: "Cloud & DevOps", icon: "Cloud", proficiency: 85, order: 21 },
        { name: "Microsoft Azure", category: "Cloud & DevOps", icon: "Cloud", proficiency: 78, order: 22 },
        { name: "Git", category: "Cloud & DevOps", icon: "GitBranch", proficiency: 95, order: 23 },
        { name: "CI/CD Pipelines", category: "Cloud & DevOps", icon: "Workflow", proficiency: 82, order: 24 },

        // Testing & Tools
        { name: "Postman", category: "Testing & Tools", icon: "Terminal", proficiency: 92, order: 25 },
        { name: "Selenium", category: "Testing & Tools", icon: "TestTube", proficiency: 78, order: 26 },
        { name: "REST Assured", category: "Testing & Tools", icon: "Terminal", proficiency: 80, order: 27 },
        { name: "Unit Testing", category: "Testing & Tools", icon: "TestTube", proficiency: 82, order: 28 },
      ]);

      await db.insert(experiences).values([
        {
          title: "Software Developer",
          company: "PODTECH",
          period: "May 2025 - Present",
          description: "Architected and deployed 10+ RESTful APIs using ASP.NET Core 8 and ASP.NET MVC. Led end-to-end development of WLS project (Westminster Legalisation Services), managing a team of 5 developers and ensuring 100% on-time delivery. Designed scalable React + TypeScript frontend with Redux. Engineered file handling mechanisms in .NET, reducing processing time by 35%. Conducted code reviews and mentored junior developers in an Agile environment.",
          order: 1
        },
        {
          title: "Software Engineer",
          company: "LTIMindtree",
          period: "Nov 2024 - Jan 2025",
          description: "Developed and deployed 5+ RESTful APIs using Spring Boot and Java, optimizing backend systems through code refactoring that reduced API response time by 20%. Designed scalable database schemas and wrote complex MySQL queries ensuring data consistency and security. Increased data processing efficiency by 30% for high-traffic applications. Worked in an Agile environment delivering feature updates in sprints.",
          order: 2
        },
        {
          title: "DSA and OOPs Instructor",
          company: "byteXL",
          period: "Aug 2024 - Nov 2024",
          description: "Taught core subjects including Data Structures & Algorithms (DSA) and Object-Oriented Programming (OOP) using Java to undergraduate students. Utilized industry experience to simplify complex concepts, fostering strong problem-solving and coding skills. Focused on practical application of algorithms through interactive examples and hands-on coding exercises. Mentored students on best coding practices.",
          order: 3
        },
        {
          title: "Data Analyst",
          company: "Department of Telecommunications (DOT)",
          period: "Jul 2024 - Aug 2024",
          description: "Worked as a Data Analyst at the Department of Telecommunications (Government of India), applying data analysis and processing techniques to support telecommunications insights and reporting.",
          order: 4
        },
        {
          title: "Founder",
          company: "Atlas Sports Labs",
          period: "Dec 2023 - Aug 2024",
          description: "Founded Atlas Sports Labs, a one-stop destination for renting sports grounds and equipment. Built the platform with a focus on affordability, authenticity, and accountability — providing transparent access to top-notch facilities with local connectivity insights, food options, parking facilities, and special discounts for schools and students.",
          order: 5
        },
        {
          title: "Full-Stack Developer",
          company: "Universal Justice Times",
          period: "Jul 2023 - Nov 2023",
          description: "Developed the company's full website using HTML, CSS, JavaScript, TypeScript, MySQL, and Node.js. Implemented a real-time news feature using the News API with a custom API to transfer and store data in a private database. This system automates nightly updates ensuring zero operational expenses for real-time news sourcing.",
          order: 6
        },
        {
          title: "Software Engineer Intern",
          company: "Pepcoding Pvt Ltd.",
          period: "Feb 2022 - Aug 2022",
          description: "Led a passporting internship project using Next.js, JavaScript, HTML, CSS, GitHub, MySQL, Bootstrap, and TailwindCSS. Crafted an interactive video module for seamless student-teacher interaction. Integrating timestamps increased video excitement by 25% and spiked student enthusiasm by 40%, triggering a 50% surge in product sales. Addressed TA confusion through a tagging system, transforming the learning experience.",
          order: 7
        },
      ]);

      await db.insert(services).values([
        {
          title: "Full Stack Development",
          description: "End-to-end web application development using React, TypeScript, Redux on the frontend and ASP.NET Core or Spring Boot on the backend — with clean architecture and MVC patterns.",
          icon: "Layout",
          order: 1
        },
        {
          title: "RESTful API Development",
          description: "Designing and building secure, high-performance RESTful APIs using ASP.NET Core 8 and Spring Boot. Deployed 35+ production-ready APIs serving thousands of daily requests.",
          icon: "Terminal",
          order: 2
        },
        {
          title: "Cloud-Native Applications",
          description: "Deploying scalable, reliable cloud solutions on AWS (EC2, RDS, S3, IAM) and Microsoft Azure (Functions, Infrastructure). Ensuring high availability and cost-efficient architecture.",
          icon: "Cloud",
          order: 3
        },
        {
          title: "Microservices Architecture",
          description: "Designing distributed systems with microservices patterns for high availability and independent scalability. Enabling seamless communication across services with robust API integration.",
          icon: "Share2",
          order: 4
        },
        {
          title: "Database Design & Optimization",
          description: "Designing scalable database schemas and query optimization strategies for MySQL, PostgreSQL, MongoDB, and SQL Server — ensuring data consistency, security, and high performance.",
          icon: "Database",
          order: 5
        },
        {
          title: "Tech Mentoring & Leadership",
          description: "Leading engineering teams, conducting code reviews, and mentoring junior developers. Experienced in Agile/Scrum methodology and delivering projects 100% on-time.",
          icon: "Users",
          order: 6
        },
      ]);
    }
  }

  seed().catch(console.error);

  return httpServer;
}
