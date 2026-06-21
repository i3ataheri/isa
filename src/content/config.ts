import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z.array(z.string()).optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    series: z.string().optional(),
    seriesPart: z.number().optional(),
  }),
});

export const collections = { blog };
