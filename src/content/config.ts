import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

const lang = defineCollection({
  // type: 'content',
  schema: z.object({
    // en: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    heroTitle: z.string().optional(),
    tagline: z.string().optional(),
    name: z.string().optional(),
    email: z.string().optional(),
    placeholder: z.string().optional(),
    send: z.string().optional(),

    // }),
    // fr: z.object({
    //   title: z.string(),
    //   description: z.string(),
    //   heroTitle: z.string().optional(),
    //   tagline: z.string().optional(),
    //   name: z.string().optional(),
    //   placeholder: z.string().optional(),
    //   send: z.string().optional(),
    // }),
  }),
});

export const collections = { work, lang };
