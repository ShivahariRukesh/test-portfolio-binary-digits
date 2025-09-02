import { ProjectInterface } from "@/app/types/project"
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import fs from "fs";

export const uploadImageFile = async (formData: ProjectInterface) => {
    let updatedFormData = { ...formData }
    let foundFile = null
    const imageFile = formData.image as File;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    try {
        const files = fs.readdirSync(uploadDir)


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



export const deleteImageFile = async (imageFile: string) => {

    let foundFile = null
    console.log("image file contextimageFile", imageFile)

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    try {
        const files = fs.readdirSync(uploadDir)


        for (let i = 0; i < files.length; i++) {

            if (files[i] === imageFile) {
                foundFile = files[i]
                break;
            }

        }

        if (foundFile) {
            const filePath = path.join(uploadDir, foundFile);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                    return;
                }
                console.log('File deleted successfully');
            });
        }
    } catch (err) {
        console.log(err)
    }
}