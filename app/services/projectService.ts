import pool from "../lib/database/db";
import { deleteImageFile, uploadImageFile } from "../lib/api/projects";
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
}

export interface ProjectInput {
    title: string;
    description: string;
    category: string;
    image: File;
}


export class ProjectService {
    static async getAllProjects(): Promise<Project[]> {
        const res = await pool.query('SELECT * FROM project');
        return res.rows;
    }

    static async createProject(projectData: ProjectInput): Promise<Project> {
        const serviceData = await uploadImageFile(projectData);

        const res = await pool.query(
            `INSERT INTO project (title, description, image, category)
         VALUES ($1, $2, $3, $4) RETURNING *`,
            [serviceData.title, serviceData.description, serviceData.image, serviceData.category]
        );

        return res.rows[0];
    }

    static async updateProject(id: string, projectData: ProjectInput): Promise<Project | null> {
        const serviceData = await uploadImageFile(projectData);

        const res = await pool.query(
            `UPDATE project
         SET title = $1, description = $2, image = $3, category = $4
         WHERE id = $5 RETURNING *`,
            [serviceData.title, serviceData.description, serviceData.image, serviceData.category, id]
        );

        return res.rows[0] || null;
    }

    static async deleteProject(id: string, imageFile?: string): Promise<Project | null> {
        const res = await pool.query('DELETE FROM project WHERE id = $1 RETURNING *', [id]);

        if (res.rows.length > 0 && imageFile) {
            await deleteImageFile(imageFile);
        }

        return res.rows[0] || null;
    }
}
