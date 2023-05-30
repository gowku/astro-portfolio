import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

const en = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { work, en };
