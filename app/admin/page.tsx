'use client'
import React, { useState, useEffect } from 'react'
import { useProjects } from '../context/ProjectContext'
import AdminAuth from './components/AdminAuth'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import { ProjectInterface } from '../types/project'
import AdminButton from '../components/utils/AdminButton'
import Loading from './loading'

const AdminPanel: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
    const [showForm, setShowForm] = useState(false)
    const [editingProject, setEditingProject] = useState<ProjectInterface | null>(null)
    const { projects, loading } = useProjects()


    useEffect(() => {
        const authStatus = localStorage.getItem('adminAuth')
        if (authStatus === 'true') {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, [])

    const handleAuthSuccess = () => {
        setIsAuthenticated(true)
        localStorage.setItem('adminAuth', 'true')
    }

    const handleLogout = () => {
        setIsAuthenticated(false)
        localStorage.removeItem('adminAuth')
    }

    const handleEdit = (project: ProjectInterface) => {
        setEditingProject(project)
        setShowForm(true)
    }

    const handleCloseForm = () => {

        setShowForm(false)
        setEditingProject(null)
    }

    if (isAuthenticated === null) {
        return <Loading />
    }

    if (!isAuthenticated) {
        return <AdminAuth onAuthSuccess={handleAuthSuccess} />
    }

    return (
        <div className="min-h-screen bg-dark text-white">



            <header className="bg-dark-secondary shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-2xl font-bold">Portfolio Admin</h1>
                            <p className="text-gray-400">Manage your portfolio projects</p>
                        </div>
                        <div className="flex items-center space-x-4 w-1/4">

                            <AdminButton text="Add Project" color="blue" buttonAction={() => setShowForm(true)} />
                            <AdminButton text="Logout" color="red" buttonAction={handleLogout} />
                        </div>
                    </div>
                </div>
            </header>


            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">




                {loading ? (
                    <Loading />
                ) : (
                    <ProjectList projects={projects} onEdit={handleEdit} />
                )}
            </main>


            {showForm && (
                <ProjectForm
                    project={editingProject}
                    onClose={handleCloseForm}
                />
            )}
        </div>
    )
}

export default AdminPanel