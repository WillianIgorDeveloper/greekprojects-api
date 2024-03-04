import { sql } from "./postgres";

const createTable = async () => {
  try {
    await sql`
			CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
		`;
    await sql`
			CREATE TABLE IF NOT EXISTS projects (
				id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
				name TEXT NOT NULL
			);
		`;
    console.log("✔️  Tables created successfully!");
  } catch (error) {
    console.log(error);
    console.log("✖️  Error creating tables!");
  }
};

createTable();
