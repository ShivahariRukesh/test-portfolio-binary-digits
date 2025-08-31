'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useProjects } from '../../context/ProjectContext'
import { ProjectInterface } from '@/app/types/project'
import Image from 'next/image'

interface ProjectFormProps {
    project: ProjectInterface | null
    onClose: () => void
}

const ProjectForm: React.FC<ProjectFormProps> = ({ project, onClose }) => {
    const { addProject, updateProject } = useProjects()

    const [formData, setFormData] = useState<Omit<ProjectInterface, 'id'>>({
        title: '',
        description: '',
        image: null,
        category: ''
    })

    const [loading, setLoading] = useState(false)

    const fileUploadRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (project) {
            setFormData({
                title: project.title,
                description: project.description,
                image: project.image,
                category: project.category

            })
        }
    }, [project])



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files, type } = e.target as HTMLInputElement;
        if (type === 'file' && files && files.length > 0) {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }))
        } else {

            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            if (project?.id) {
                await updateProject(project.id, formData)
            } else {
                await addProject(formData)
            }
            onClose()
        } catch (error) {
            console.error('Error saving project:', error)
        } finally {
            setLoading(false)
        }
    }





    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-dark-secondary rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-gray-700">
                    <h2 className="text-2xl font-bold text-white">
                        {project ? 'Edit Project' : 'Add New Project'}
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            name='title'
                            value={formData.title}
                            onChange={(e) => handleChange(e)}
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Description
                        </label>
                        <textarea
                            value={formData.description}
                            name='description'
                            onChange={(e) => handleChange(e)}
                            rows={4}
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            {project?.image ?


                                (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Upload new image
                                        </label>
                                        <Image src={project.image as string} alt={project.title} width={150} height={100} onClick={() => { fileUploadRef.current?.click() }} className='cursor-pointer' />
                                        <input
                                            type="file"
                                            name="image"
                                            accept="image/*"
                                            onChange={(e) => handleChange(e)}
                                            ref={fileUploadRef}

                                            className="hidden"
                                        />
                                    </div>)
                                :
                                (<>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Add Image
                                    </label>
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={(e) => handleChange(e)}
                                        className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </>

                                )}
                        </div>

                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Category
                        </label>
                        <input
                            type="text"
                            name='category'
                            value={formData.category}
                            onChange={(e) => handleChange(e)}
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Web Design, Mobile App, etc."
                            required
                        />
                    </div>



                    <div className="flex gap-4 pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-2 rounded-lg font-medium transition-colors"
                        >
                            {loading ? 'Saving...' : (project ? 'Update Project' : 'Create Project')}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-medium transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProjectForm