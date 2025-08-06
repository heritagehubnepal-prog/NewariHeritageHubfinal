import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "./db";
import { admins, stories, heritageItems, characters, services } from "@shared/schema";
import { eq, count } from "drizzle-orm";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "heritage-hub-admin-secret-key";

// Middleware to verify admin token
const verifyAdmin = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const admin = await db.select().from(admins).where(eq(admins.id, decoded.adminId)).limit(1);
    
    if (!admin.length || !admin[0].isActive) {
      return res.status(401).json({ error: "Invalid or inactive admin" });
    }

    req.admin = admin[0];
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// Admin login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Username and password required" });
    }

    const admin = await db.select().from(admins).where(eq(admins.username, username)).limit(1);
    
    if (!admin.length) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isValidPassword = await bcrypt.compare(password, admin[0].password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    if (!admin[0].isActive) {
      return res.status(401).json({ error: "Account is inactive" });
    }

    const token = jwt.sign(
      { adminId: admin[0].id, username: admin[0].username },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({ 
      token, 
      admin: { 
        id: admin[0].id, 
        username: admin[0].username 
      } 
    });
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get admin stats
router.get("/stats", verifyAdmin, async (req, res) => {
  try {
    const [storiesCount] = await db.select({ count: count() }).from(stories);
    const [heritageCount] = await db.select({ count: count() }).from(heritageItems);
    const [charactersCount] = await db.select({ count: count() }).from(characters);
    const [servicesCount] = await db.select({ count: count() }).from(services);

    res.json({
      totalStories: storiesCount.count,
      totalHeritage: heritageCount.count,
      totalCharacters: charactersCount.count,
      totalServices: servicesCount.count,
      totalUsers: 0, // Can be implemented later if needed
    });
  } catch (error) {
    console.error("Stats error:", error);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

// Stories management
router.get("/stories", verifyAdmin, async (req, res) => {
  try {
    const allStories = await db.select().from(stories);
    res.json(allStories);
  } catch (error) {
    console.error("Stories fetch error:", error);
    res.status(500).json({ error: "Failed to fetch stories" });
  }
});

router.post("/stories", verifyAdmin, async (req, res) => {
  try {
    const newStory = await db.insert(stories).values(req.body).returning();
    res.status(201).json(newStory[0]);
  } catch (error) {
    console.error("Story creation error:", error);
    res.status(500).json({ error: "Failed to create story" });
  }
});

router.put("/stories/:id", verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedStory = await db
      .update(stories)
      .set(req.body)
      .where(eq(stories.id, parseInt(id)))
      .returning();
    
    if (!updatedStory.length) {
      return res.status(404).json({ error: "Story not found" });
    }
    
    res.json(updatedStory[0]);
  } catch (error) {
    console.error("Story update error:", error);
    res.status(500).json({ error: "Failed to update story" });
  }
});

router.delete("/stories/:id", verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStory = await db
      .delete(stories)
      .where(eq(stories.id, parseInt(id)))
      .returning();
    
    if (!deletedStory.length) {
      return res.status(404).json({ error: "Story not found" });
    }
    
    res.json({ message: "Story deleted successfully" });
  } catch (error) {
    console.error("Story deletion error:", error);
    res.status(500).json({ error: "Failed to delete story" });
  }
});

// Heritage items management
router.get("/heritage", verifyAdmin, async (req, res) => {
  try {
    const allHeritage = await db.select().from(heritageItems);
    res.json(allHeritage);
  } catch (error) {
    console.error("Heritage fetch error:", error);
    res.status(500).json({ error: "Failed to fetch heritage items" });
  }
});

router.post("/heritage", verifyAdmin, async (req, res) => {
  try {
    const newHeritage = await db.insert(heritageItems).values(req.body).returning();
    res.status(201).json(newHeritage[0]);
  } catch (error) {
    console.error("Heritage creation error:", error);
    res.status(500).json({ error: "Failed to create heritage item" });
  }
});

router.put("/heritage/:id", verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedHeritage = await db
      .update(heritageItems)
      .set(req.body)
      .where(eq(heritageItems.id, parseInt(id)))
      .returning();
    
    if (!updatedHeritage.length) {
      return res.status(404).json({ error: "Heritage item not found" });
    }
    
    res.json(updatedHeritage[0]);
  } catch (error) {
    console.error("Heritage update error:", error);
    res.status(500).json({ error: "Failed to update heritage item" });
  }
});

router.delete("/heritage/:id", verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHeritage = await db
      .delete(heritageItems)
      .where(eq(heritageItems.id, parseInt(id)))
      .returning();
    
    if (!deletedHeritage.length) {
      return res.status(404).json({ error: "Heritage item not found" });
    }
    
    res.json({ message: "Heritage item deleted successfully" });
  } catch (error) {
    console.error("Heritage deletion error:", error);
    res.status(500).json({ error: "Failed to delete heritage item" });
  }
});

// Characters management
router.get("/characters", verifyAdmin, async (req, res) => {
  try {
    const allCharacters = await db.select().from(characters);
    res.json(allCharacters);
  } catch (error) {
    console.error("Characters fetch error:", error);
    res.status(500).json({ error: "Failed to fetch characters" });
  }
});

router.put("/characters/:id", verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCharacter = await db
      .update(characters)
      .set(req.body)
      .where(eq(characters.id, parseInt(id)))
      .returning();
    
    if (!updatedCharacter.length) {
      return res.status(404).json({ error: "Character not found" });
    }
    
    res.json(updatedCharacter[0]);
  } catch (error) {
    console.error("Character update error:", error);
    res.status(500).json({ error: "Failed to update character" });
  }
});

// Stories Management
router.post('/stories', verifyAdmin, async (req, res) => {
  try {
    const { title, excerpt, content, narrator, readingTime } = req.body;
    const [newStory] = await db.insert(stories).values({
      title,
      excerpt,
      content,
      narrator,
      readingTime
    }).returning();
    res.json(newStory);
  } catch (error) {
    console.error('Create story error:', error);
    res.status(500).json({ error: 'Failed to create story' });
  }
});

router.put('/stories/:id', verifyAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, excerpt, content, narrator, readingTime } = req.body;
    const [updatedStory] = await db
      .update(stories)
      .set({ title, excerpt, content, narrator, readingTime })
      .where(eq(stories.id, id))
      .returning();
    res.json(updatedStory);
  } catch (error) {
    console.error('Update story error:', error);
    res.status(500).json({ error: 'Failed to update story' });
  }
});

router.delete('/stories/:id', verifyAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await db.delete(stories).where(eq(stories.id, id));
    res.json({ success: true });
  } catch (error) {
    console.error('Delete story error:', error);
    res.status(500).json({ error: 'Failed to delete story' });
  }
});

// Heritage Items Management
router.post('/heritage', verifyAdmin, async (req, res) => {
  try {
    const { name, description, category, significance, location } = req.body;
    const [newHeritage] = await db.insert(heritageItems).values({
      name,
      description,
      category,
      significance,
      location
    }).returning();
    res.json(newHeritage);
  } catch (error) {
    console.error('Create heritage error:', error);
    res.status(500).json({ error: 'Failed to create heritage item' });
  }
});

router.put('/heritage/:id', verifyAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, description, category, significance, location } = req.body;
    const [updatedHeritage] = await db
      .update(heritageItems)
      .set({ name, description, category, significance, location })
      .where(eq(heritageItems.id, id))
      .returning();
    res.json(updatedHeritage);
  } catch (error) {
    console.error('Update heritage error:', error);
    res.status(500).json({ error: 'Failed to update heritage item' });
  }
});

router.delete('/heritage/:id', verifyAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await db.delete(heritageItems).where(eq(heritageItems.id, id));
    res.json({ success: true });
  } catch (error) {
    console.error('Delete heritage error:', error);
    res.status(500).json({ error: 'Failed to delete heritage item' });
  }
});

// Characters Management
router.post('/characters', verifyAdmin, async (req, res) => {
  try {
    const { name, description, role, personality } = req.body;
    const [newCharacter] = await db.insert(characters).values({
      name,
      description,
      role,
      personality
    }).returning();
    res.json(newCharacter);
  } catch (error) {
    console.error('Create character error:', error);
    res.status(500).json({ error: 'Failed to create character' });
  }
});

router.put('/characters/:id', verifyAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, description, role, personality } = req.body;
    const [updatedCharacter] = await db
      .update(characters)
      .set({ name, description, role, personality })
      .where(eq(characters.id, id))
      .returning();
    res.json(updatedCharacter);
  } catch (error) {
    console.error('Update character error:', error);
    res.status(500).json({ error: 'Failed to update character' });
  }
});

router.delete('/characters/:id', verifyAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await db.delete(characters).where(eq(characters.id, id));
    res.json({ success: true });
  } catch (error) {
    console.error('Delete character error:', error);
    res.status(500).json({ error: 'Failed to delete character' });
  }
});

// Services management
router.get("/services", verifyAdmin, async (req, res) => {
  try {
    const allServices = await db.select().from(services);
    res.json(allServices);
  } catch (error) {
    console.error("Services fetch error:", error);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

router.post("/services", verifyAdmin, async (req, res) => {
  try {
    const newService = await db.insert(services).values(req.body).returning();
    res.status(201).json(newService[0]);
  } catch (error) {
    console.error("Service creation error:", error);
    res.status(500).json({ error: "Failed to create service" });
  }
});

router.put("/services/:id", verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedService = await db
      .update(services)
      .set(req.body)
      .where(eq(services.id, parseInt(id)))
      .returning();
    
    if (!updatedService.length) {
      return res.status(404).json({ error: "Service not found" });
    }
    
    res.json(updatedService[0]);
  } catch (error) {
    console.error("Service update error:", error);
    res.status(500).json({ error: "Failed to update service" });
  }
});

router.delete("/services/:id", verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await db
      .delete(services)
      .where(eq(services.id, parseInt(id)))
      .returning();
    
    if (!deletedService.length) {
      return res.status(404).json({ error: "Service not found" });
    }
    
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    console.error("Service deletion error:", error);
    res.status(500).json({ error: "Failed to delete service" });
  }
});

export default router;