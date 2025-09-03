import { NextRequest } from "next/server";
import { ProjectService } from "@/app/services/projectService";
import { SuccessResponse, ErrorResponse } from "@/app/lib/api/apiResponse";
import { parseProjectFormData } from "@/app/lib/api/formDataParser";

interface RouteParams {
    params: Promise<{ id: string }>;
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
    try {
        const { id } = await params;
        const { imageFile } = await request.json();

        const deletedProject = await ProjectService.deleteProject(id, imageFile);

        if (!deletedProject) {
            return ErrorResponse('Project not found', 404);
        }

        return SuccessResponse([deletedProject], "The project has been deleted successfully");
    } catch (error) {
        return ErrorResponse(`Failed to delete the record: ${error}`);
    }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
    try {
        const { id } = await params;
        const formData = await request.formData();
        const projectData = parseProjectFormData(formData);

        const updatedProject = await ProjectService.updateProject(id, projectData);

        if (!updatedProject) {
            return ErrorResponse('Project not found', 404);
        }

        return SuccessResponse([updatedProject], "The project has been updated successfully");
    } catch (error) {
        console.error('Failed to update project:', error);
        return ErrorResponse(`Failed to update the record: ${error}`);
    }
}