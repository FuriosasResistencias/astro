import { defineCollection, z } from "astro:content";

// Define the schema for your articles with title, description, author, and date
const baseSchema = z.object({
  title: z.string(),
  thumbnail: z.string(), // Adds featured image (optional)
  description: z.string(),  // Added description
  author: z.string(),        // Added author
  date: z.date(),            // Keep date as a required field
});

// Create collections for the different categories
const noticias = defineCollection({
  schema: baseSchema,
});

const arteycultura = defineCollection({
  schema: baseSchema,
});

const agroecologia = defineCollection({
  schema: baseSchema,
});

// Export collections for Astro to recognize
export const collections = {
  noticias,
  arteycultura,
  agroecologia,
};
