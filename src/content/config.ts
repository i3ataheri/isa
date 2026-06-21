import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    date: z.date().optional(),
    draft: z.boolean().optional(),
    category: z.string().optional(),
  }),
});

export const collections = { blog };
