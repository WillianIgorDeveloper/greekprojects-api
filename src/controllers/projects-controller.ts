import { sql } from "../database/postgres";

export const loadProjects = async () => {
  try {
    const projects = await sql`
			SELECT * FROM projects
		`;

    return {
      success: true,
      message: "Projects loaded successfully",
      body: projects,
    };
  } catch (error) {
    throw new Error(`# loadProjects Error: ${error}`);
  }
};
