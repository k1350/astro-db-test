import { Like, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Like).values([
		{ url: "/", createdAt: new Date() },
		{ url: "/", createdAt: new Date() },
		{ url: "/about", createdAt: new Date() },
	  ])
}
