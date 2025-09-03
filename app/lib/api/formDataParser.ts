export const parseProjectFormData = (formData: FormData) => {
    return {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        image: formData.get('image') as File,
    };
};

