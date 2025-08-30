import { ProjectInterface } from "@/app/types/project"
import { mkdir, writeFile } from "fs/promises";
import path from "path";

export const addProjectService = async (formData: ProjectInterface) => {

    console.log("Service", formData)

    const imageFile = formData.image as File;

    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${Date.now()}-${imageFile.name}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    const filePath = path.join(uploadDir, fileName);


    await mkdir(uploadDir, { recursive: true });


    await writeFile(filePath, buffer);

    const imageFileUrl = `/uploads/${fileName}`
    const updateFormData = { ...formData, image: imageFileUrl }

    return updateFormData

}