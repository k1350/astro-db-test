import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), preact()],
  output: 'server',
  adapter: vercel()
});