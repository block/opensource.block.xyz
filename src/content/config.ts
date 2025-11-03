import { z, defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

export const collections = {
  // Our Blog Implementation is an Astro Content Collection
  blog: defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog/posts" }),
    schema: z.object({
      title: z.string(),
      author: z.string(),
      date: z.coerce.date(),
      slug: z.string(),
      excerpt: z.string().optional(),
      image: z.string().optional(),
      tags: z.array(z.string()).optional(),
      readTime: z.string().optional(),
    })}),
  // Blog Authors are also an Astro Content Collection
  authors: defineCollection({
    loader: file("./src/content/blog/authors.json"),
    schema: z.object({
      name: z.string(),
      title: z.string().optional(),
      'social-github': z.string().optional(),
      'social-linkedin': z.string().optional(),
      'social-x': z.string().optional(),
      avatar: z.string(),
    })}),
};