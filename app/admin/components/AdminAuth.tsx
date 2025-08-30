'use client'
import React, { useState } from 'react'

interface AdminAuthProps {
    onAuthSuccess: () => void
}

const AdminAuth: React.FC<AdminAuthProps> = ({ onAuthSuccess }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            })

            const data = await response.json()

            if (data.success) {
                onAuthSuccess()
            } else {
                setError(data.message || 'Authentication failed')
            }
        } catch (err) {
            setError('Network error occurred' + err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-dark flex items-center justify-center">
            <div className="max-w-md w-full mx-4">
                <div className="bg-dark-secondary rounded-lg shadow-xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
                        <p className="text-gray-400">Enter your credentials to access the admin panel</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter username"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter password"
                                required
                            />
                        </div>

                        {error && (
                            <div className="bg-red-900/50 border border-red-500 rounded-lg p-3">
                                <p className="text-red-300 text-sm">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3 rounded-lg font-medium transition-colors"
                        >
                            {loading ? 'Authenticating...' : 'Login'}
                        </button>
                    </form>

                    {/* Demo credentials info */}
                    <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-600 rounded-lg">
                        <p className="text-yellow-300 text-sm font-medium mb-1">Demo Credentials:</p>
                        <p className="text-yellow-200 text-xs">Username: admin</p>
                        <p className="text-yellow-200 text-xs">Password: portfolio123</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAuth