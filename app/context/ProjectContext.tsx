'use client'

import { useContext, useState, createContext, ReactNode } from "react"
import { ProjectContextInterface, ProjectInterface } from "../types/project"

const ProjectContext = createContext<ProjectContextInterface | undefined>(undefined)


export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [projects, setProjects] = useState<ProjectInterface[]>([
        {
            title: "Web chat",
            description: "Simple web chat application using socket"
        },
        {
            title: "Web chat",
            description: "Simple web chat application using socket"
        }
    ])
    const [loading, setLoading] = useState(false)



    return (
        <ProjectContext.Provider value={{
            projects,
            setProjects,
            loading,
            setLoading
        }}>
            {children}
        </ProjectContext.Provider>
    )
}

export const useProjects = () => {
    const context = useContext(ProjectContext)

    if (context === undefined) {
        throw new Error('useProjects must be used within the ProjectProvider')
    }

    return context
}