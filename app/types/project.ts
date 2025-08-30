import React from "react"

export interface ProjectInterface {

    id?: number
    title: string
    description: string
    image: File | string | null
    category: string
}

export interface ProjectContextInterface {
    projects: ProjectInterface[]
    setProjects: React.Dispatch<React.SetStateAction<ProjectInterface[]>>

    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>

    deleteProject: (id: number) => void
    updateProject: (id: number, formdata: ProjectInterface) => void
    addProject: (formdata: ProjectInterface) => void


}