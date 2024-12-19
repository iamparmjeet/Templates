import { sqliteTable, AnySQLiteColumn, integer, text } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const tasks = sqliteTable("tasks", {
	id: integer().primaryKey({ autoIncrement: true }).notNull(),
	name: text().notNull(),
	done: integer().default(false).notNull(),
	createdAt: integer("created_at"),
	updatedAt: integer("updated_at"),
});

