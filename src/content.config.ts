import { defineCollection, z } from "astro:content";

// Definir el esquema de los artículos con solo los campos básicos
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
});

// Crear colecciones para las distintas categorías
const noticias = defineCollection({
  schema: baseSchema,
});

const arteycultura = defineCollection({
  schema: baseSchema,
});

const agroecologia = defineCollection({
  schema: baseSchema,
});

// Exportar las colecciones para que Astro las reconozca
export const collections = {
  noticias,
  arteycultura,
  agroecologia,
};