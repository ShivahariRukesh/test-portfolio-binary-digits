import { ProjectInterface } from '@/app/types/project'
import React from 'react'


interface ProjectCardProps {
    project: ProjectInterface
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div>{project.description}</div>
    )
}

export default ProjectCard