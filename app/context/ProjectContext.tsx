'use client'

import { useContext, useState, createContext, ReactNode, useEffect } from "react"
import { ProjectContextInterface, ProjectInterface } from "../types/project"

const ProjectContext = createContext<ProjectContextInterface | undefined>(undefined)


export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [projects, setProjects] = useState<ProjectInterface[]>([])
    const [loading, setLoading] = useState(false)


    const fetchAllProjects = async () => {

        const response = await fetch('/api/project')
        const data = await response.json();
        console.log(data)
        return data
    }
    useEffect(() => {
        (async () => {
            const data = await fetchAllProjects();
            setProjects([...data.data])
        })()
    }, [])


    const addProject = async (formData: ProjectInterface) => {
        const payload = new FormData()
        payload.append('title', formData.title)
        payload.append('description', formData.description)
        payload.append('image', formData.image as File)
        payload.append('category', formData.category)

        const res = await fetch('/api/project', {
            method: 'POST',
            body: payload,
        })
        return res
    }

    const deleteProject = async (id: number) => {
        try {

            const res = await fetch(`/api/project/${id}`, {
                method: 'DELETE'
            })
            const value = await res.json();
            if (!value.success) {
                throw new Error('Failed to delete project ')
            }
            fetchAllProjects()
        } catch (err) {
            console.log("Error while deleting project ", err)
        }
    }



    const updateProject = async (id: number, formData: ProjectInterface) => {
        const payload = new FormData()

        payload.append('title', formData.title)
        payload.append('description', formData.description)
        payload.append('image', formData.image as File)
        payload.append('category', formData.category)

        const res = await fetch(`/api/project/${id}`, {
            method: 'PUT',
            body: payload
        })
        const value = await res.json()

        if (value.success) {
            console.log("Project deletedSuccessfully")
            fetchAllProjects()
        } else {
            console.log("Project cannot be deleted successfully")
        }
    }

    return (
        <ProjectContext.Provider value={{
            projects,
            setProjects,
            loading,
            setLoading,
            addProject,
            updateProject,
            deleteProject
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