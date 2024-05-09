import { defineAction, z } from "astro:actions";
import { Like, count, db, eq } from "astro:db";

export const server = {
  addLike: defineAction({
    accept: "form",
    input: z.object({ url: z.string().regex(/^\/.*/) }),
    handler: async ({ url }) => {
      await db.insert(Like).values({ url, createdAt: new Date() });
      const likeCounts = await db
        .select({ count: count() })
        .from(Like)
        .where(eq(Like.url, url));
      const likeCount = likeCounts.length > 0 ? likeCounts[0].count : 0;
      return { likeCount };
    },
  }),
};
