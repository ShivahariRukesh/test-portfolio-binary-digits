import { ProjectInterface } from "@/app/types/project"
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import fs from "fs";

export const addProjectService = async (formData: ProjectInterface) => {
    let updatedFormData = { ...formData }
    let foundFile = null
    const imageFile = formData.image as File;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    try {
        const files = fs.readdirSync(uploadDir)

        console.log("Files in folder")

        for (let i = 0; i < files.length; i++) {

            if (files[i].split('-').slice(1).join('-') === imageFile.name) {
                foundFile = files[i]
                break;
            }

        }


        if (foundFile === null) {
            const bytes = await imageFile.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const fileName = `${Date.now()}-${imageFile.name}`;
            const filePath = path.join(uploadDir, fileName);


            await mkdir(uploadDir, { recursive: true });


            await writeFile(filePath, buffer);

            const imageFileUrl = `/uploads/${fileName}`
            updatedFormData = { ...updatedFormData, image: imageFileUrl }
        }
        else {
            updatedFormData = { ...updatedFormData, image: '/uploads/foundFile' }

        }

    } catch (err) {
        console.log(err)
    }
    return updatedFormData

}