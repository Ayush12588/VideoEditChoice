import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['beginners', 'comparisons', 'free-tools', 'low-end-pc', 'guides']),
    publishDate: z.string(),
    author: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  'articles': articlesCollection,
};
