import { ProjectInterface } from '@/app/types/project'
import Image from 'next/image'
import React from 'react'


interface ProjectCardProps {
    project: ProjectInterface
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card bg-dark-secondary rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group">

            <div className="relative h-48 md:h-64 overflow-hidden">
                <Image
                    src='/images/project-image.png'
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
                        {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 whitespace-nowrap ml-2">
                        view detail
                    </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>


            </div>
        </div>
    )
}

export default ProjectCard