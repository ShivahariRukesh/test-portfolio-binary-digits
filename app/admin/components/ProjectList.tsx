'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useProjects } from '../../context/ProjectContext'
import { ProjectInterface } from '@/app/types/project'
import AdminButton from '@/app/components/utils/AdminButton'

interface ProjectListProps {
    projects: ProjectInterface[]
    onEdit: (project: ProjectInterface) => void
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onEdit }) => {
    const { deleteProject } = useProjects()
    const [deletingId, setDeletingId] = useState<number | null>(null)

    const handleDelete = async (id: number, image: string) => {

        if (window.confirm('Are you sure you want to delete this project?')) {
            setDeletingId(id)
            try {
                deleteProject(id, image)
            } catch (error) {
                console.error('Error deleting project:', error)
            } finally {
                setDeletingId(null)
            }
        }
    }

    if (projects.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="text-gray-400 text-lg mb-4">No projects found</div>
                <p className="text-gray-500">Create your first project to get started!</p>
            </div>
        )
    }

    return (
        <div className="bg-dark-secondary rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">All Projects</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                Project
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                Category
                            </th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {projects.map((project) => (
                            <tr key={project.id} className="hover:bg-gray-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-600 rounded-lg mr-4 overflow-hidden flex-shrink-0">
                                            {project.image && (
                                                <Image
                                                    src={project.image as string}
                                                    alt={project.title}
                                                    width={48}
                                                    height={48}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </div>
                                        <div>
                                            <div className="text-white font-medium">{project.title}</div>
                                            <div className="text-gray-400 text-sm line-clamp-1">
                                                {project.description}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-300">
                                    <span className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                                        {project.category}
                                    </span>
                                </td>


                                <td className="px-6 py-4 text-sm">
                                    <div className="flex items-center gap-2">

                                        <AdminButton
                                            text='Edit'
                                            color='blue'
                                            buttonAction={() => onEdit(project)}
                                        />

                                        <AdminButton
                                            text={deletingId === project.id ? 'Deleting...' : 'Delete'}
                                            color='red'
                                            buttonAction={() => project.id && handleDelete(project.id, project.image as string)}
                                            buttonDisable={deletingId === project.id}
                                        />

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProjectList