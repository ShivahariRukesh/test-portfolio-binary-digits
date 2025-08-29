import React from "react"

export interface ProjectInterface {

    id?: number
    title: string
    description: string
}

export interface ProjectContextInterface {
    projects: ProjectInterface[]
    setProjects: React.Dispatch<React.SetStateAction<ProjectInterface[]>>

    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>


}