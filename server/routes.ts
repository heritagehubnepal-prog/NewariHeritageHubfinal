import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import adminRoutes from "./admin-routes";
import { db } from "./db";
import { stories, characters, heritageItems, services } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function registerRoutes(app: Express): Promise<Server> {
  // Public API routes for frontend consumption

  // Stories endpoint
  app.get("/api/stories", async (req, res) => {
    try {
      const allStories = await db.select().from(stories);
      res.json(allStories);
    } catch (error) {
      console.error("Error fetching stories:", error);
      res.status(500).json({ error: "Failed to fetch stories" });
    }
  });

  // Characters endpoint
  app.get("/api/characters", async (req, res) => {
    try {
      const allCharacters = await db.select().from(characters);
      res.json(allCharacters);
    } catch (error) {
      console.error("Error fetching characters:", error);
      res.status(500).json({ error: "Failed to fetch characters" });
    }
  });

  // Heritage items endpoint
  app.get("/api/heritage", async (req, res) => {
    try {
      const allHeritage = await db.select().from(heritageItems);
      res.json(allHeritage);
    } catch (error) {
      console.error("Error fetching heritage items:", error);
      res.status(500).json({ error: "Failed to fetch heritage items" });
    }
  });

  // Services endpoint
  app.get("/api/services", async (req, res) => {
    try {
      const allServices = await db.select().from(services);
      res.json(allServices);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  // Individual story endpoint
  app.get("/api/stories/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const [story] = await db.select().from(stories).where(eq(stories.id, id));
      
      if (!story) {
        return res.status(404).json({ error: "Story not found" });
      }
      
      res.json(story);
    } catch (error) {
      console.error("Error fetching story:", error);
      res.status(500).json({ error: "Failed to fetch story" });
    }
  });

  // Admin routes
  app.use("/api/admin", adminRoutes);

  const httpServer = createServer(app);

  return httpServer;
}
