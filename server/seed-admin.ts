import bcrypt from "bcryptjs";
import { db } from "./db";
import { admins } from "@shared/schema";

async function seedAdmin() {
  try {
    // Check if admin already exists
    const existingAdmin = await db.select().from(admins).limit(1);
    
    if (existingAdmin.length > 0) {
      console.log("Admin user already exists");
      return;
    }

    // Create default admin user
    const hashedPassword = await bcrypt.hash("admin123", 10);
    
    await db.insert(admins).values({
      username: "admin",
      password: hashedPassword,
      isActive: true,
    });

    console.log("✅ Default admin user created:");
    console.log("Username: admin");
    console.log("Password: admin123");
    console.log("Please change the password after first login!");
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
}

seedAdmin();