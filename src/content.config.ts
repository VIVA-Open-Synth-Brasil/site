import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['Notícias', 'Guias', 'Recursos', 'Projetos']),
    author: z.string().default('Voz Livre Brasil'),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };
