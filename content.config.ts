import { defineCollection, defineContentConfig } from "@nuxt/content";

import { z } from "zod";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "page",
      source: "projects/*.md",

      schema: z.object({
        title: z.string(),
        description: z.string(),

        category: z.string().default("Mechanical Design"),
        status: z.string().default("Prototype"),

        year: z.number().optional(),

        order: z.number().default(999),
        featured: z.boolean().default(false),

        cover: z.string(),

        tags: z.array(z.string()).default([]),
        software: z.array(z.string()).default([]),

        files: z
          .array(
            z.object({
              name: z.string(),
              url: z.string(),
              format: z.string(),
            }),
          )
          .default([]),
      }),
    }),
  },
});
