import type { APIRoute } from "astro";
import { Like, db } from "astro:db";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const url = data.get("url");
  if (typeof url === "string" && url.startsWith("/")) {
    await db
      .insert(Like)
      .values({ url, createdAt: new Date() });

    return new Response(
      JSON.stringify({
        message: "Success"
      }),
      { status: 200 }
    );
  }
  return new Response(
    JSON.stringify({
      message: "Bad Request"
    }),
    { status: 400 }
  );
};