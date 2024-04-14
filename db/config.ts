import { column, defineDb, defineTable } from 'astro:db';

const Like = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    url: column.text(),
    createdAt: column.date(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Like }
});
