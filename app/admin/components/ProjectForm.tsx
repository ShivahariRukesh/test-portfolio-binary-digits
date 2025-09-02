'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useProjects } from '../../context/ProjectContext'
import { ProjectInterface } from '@/app/types/project'
import Image from 'next/image'
import gsap from 'gsap'
import AdminButton from '@/app/components/utils/AdminButton'

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
    const formRef = useRef<HTMLInputElement | null>(null)

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



    useEffect(() => {

        gsap.to(formRef.current, {

            y: -50,
            opacity: 1,
            duration: 1,
            ease: 'bounce'
        })

    }, [])



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        } catch (error) {
            console.error('Error saving project:', error)
        } finally {
            handleFormOnClose()
            setLoading(false)
        }
    }

    const handleFormOnClose = () => {

        if (formRef.current) {
            gsap.to(formRef.current, {
                y: -100,
                opacity: 0,
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    onClose();
                },
            });
        }
    }



    return (
        <div className="main-screen  min-h-screen fixed inset-0 z-50 flex items-center justify-center p-4">

            <div ref={formRef} className=" opacity-0 bg-gray-800 p-8 rounded-lg shadow-lg  max-w-lg w-full ">



                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white">
                        {project ? 'Edit Project' : 'Add New Project'}
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title Field */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-1">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Description Field */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="What's it about"
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="grid grid-cols-1">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                {project?.image ? 'Upload New Image' : 'Add Image'}
                            </label>

                            {project?.image ? (
                                <>
                                    <Image
                                        src={project.image as string}
                                        alt={project.title}
                                        width={150}
                                        height={100}
                                        onClick={() => fileUploadRef.current?.click()}
                                        className="cursor-pointer"
                                    />
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleChange}
                                        ref={fileUploadRef}
                                        className="hidden"
                                    />
                                </>
                            ) : (
                                <input
                                    type="file"
                                    name="image"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            )}
                        </div>
                    </div>

                    {/* Category Field */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-400 mb-1">
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="" disabled>Select a category</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Mobile Application">Mobile Application</option>
                            <option value="Desktop Application">Desktop Application</option>
                        </select>
                    </div>

                    <div className="flex gap-4 pt-4">

                        <AdminButton
                            text={loading ? 'Saving...' : project ? 'Update Project' : 'Create Project'}
                            color='blue'
                            buttonType='submit'
                            buttonDisable={loading}
                        />

                        <AdminButton
                            text="Cancel"
                            color='red'
                            buttonAction={handleFormOnClose}
                            buttonDisable={loading}
                        />
                    </div>
                </form>
            </div>
        </div>


    )
}

export default ProjectForm