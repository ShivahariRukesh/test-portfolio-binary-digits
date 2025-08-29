'use client'

import { useContext, useState, createContext, ReactNode, useEffect } from "react"
import { ProjectContextInterface, ProjectInterface } from "../types/project"

const ProjectContext = createContext<ProjectContextInterface | undefined>(undefined)


export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [projects, setProjects] = useState<ProjectInterface[]>([])
    const [loading, setLoading] = useState(false)


    const fetchAllProjects = async () => {

        const response = await fetch('/api/projects')
        const data = await response.json();
        return data
    }
    useEffect(() => {
        (async () => {
            const data = await fetchAllProjects();
            console.log(data)
            setProjects(data.data)
        })()
    }, [])

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