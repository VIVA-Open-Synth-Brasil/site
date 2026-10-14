import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['Notícias', 'Guias', 'Recursos', 'Projetos', 'Enciclopédia', 'Ferramentas', 'Comunidade', 'Desenvolvimento']),
    section: z.enum(['artigos', 'guias', 'enciclopedia', 'ferramentas', 'comunidade', 'desenvolvimento']).default('artigos'),
    author: z.string().default('xiao'),
    authorUrl: z.string().url().default('https://vsynthbr.fandom.com/pt-br/wiki/Categoria:Xiaop'),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCaption: z.string().optional(),
    heroSource: z.string().url().optional(),
    heroCredit: z.string().optional(),
    heroLicense: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };
