import { ProjectInterface } from '@/app/types/project'
import Image from 'next/image'
import React from 'react'


interface ProjectCardProps {
    project: ProjectInterface
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="min-w-[350px] rounded-lg border-1 border-[#494949] overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer ">

            <div className="relative h-44 md:h-96 ">
                <Image
                    src={project.image as string}
                    alt={project.title}
                    fill
                    className=" transform rotate-10 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="p-6">
                <div className="flex flex-col gap-y-2 items-start mb-2">
                    <span className="text-sm rounded-full bg-gradient-to-r from-[#222222] via-[#7e6e6d] to-[#956b60] text-[#CECECE] p-2">
                        {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
                        {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 whitespace-nowrap ml-2">
                        View Detail →
                    </span>
                </div>



            </div>
        </div>
    )
}

export default ProjectCard