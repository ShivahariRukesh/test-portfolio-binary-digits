import { NextRequest } from "next/server";
import { ProjectService } from "@/app/services/projectService";
import { SuccessResponse, ErrorResponse } from "@/app/lib/api/apiResponse";
import { parseProjectFormData } from "@/app/lib/api/formDataParser";
export async function GET() {
    try {
        const projects = await ProjectService.getAllProjects();
        return SuccessResponse(projects, "All of the projects has been fetched successfully");
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        return ErrorResponse('Failed to fetch projects');
    }
}


export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const projectData = parseProjectFormData(formData);

        const newProject = await ProjectService.createProject(projectData);
        return SuccessResponse(newProject, "The project has been stored successfully", 201);
    } catch (error) {
        console.error('Failed to create project:', error);
        return ErrorResponse('Failed to create the project');
    }
}