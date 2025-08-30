// app/admin/page.tsx
'use client'
import React, { useState, useEffect } from 'react'
import { useProjects } from '../context/ProjectContext'
import AdminAuth from './components/AdminAuth'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import { ProjectInterface } from '../types/project'

const AdminPanel: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [editingProject, setEditingProject] = useState<ProjectInterface | null>(null)
    const { projects, loading } = useProjects()

    // Check authentication status on component mount
    useEffect(() => {
        const authStatus = localStorage.getItem('adminAuth')
        if (authStatus === 'true') {
            setIsAuthenticated(true)
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

    if (!isAuthenticated) {
        return <AdminAuth onAuthSuccess={handleAuthSuccess} />
    }

    return (
        <div className="min-h-screen bg-dark text-white">
            {/* Header */}


            <header className="bg-dark-secondary shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-2xl font-bold">Portfolio Admin</h1>
                            <p className="text-gray-400">Manage your portfolio projects</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setShowForm(true)}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Add Project
                            </button>
                            <button
                                onClick={handleLogout}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-dark-secondary rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">Total Projects</h3>
                        <p className="text-3xl font-bold text-blue-400">{projects.length}</p>
                    </div>
                    <div className="bg-dark-secondary rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">Categories</h3>
                        <p className="text-3xl font-bold text-green-400">
                            project cateogyr
                        </p>
                    </div>
                    <div className="bg-dark-secondary rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">Last Updated</h3>
                        <p className="text-sm text-gray-400">
                            project updated at
                        </p>
                    </div>

                </div>

                {/* Projects List */}


                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        <p className="mt-2 text-gray-400">Loading projects...</p>
                    </div>
                ) : (
                    <ProjectList projects={projects} onEdit={handleEdit} />
                )}
            </main>

            {/* Project Form Modal */}
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