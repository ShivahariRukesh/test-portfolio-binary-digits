import { NextRequest } from 'next/server'
import { SuccessResponse, ErrorResponse } from '@/app/lib/api/apiResponse'
export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json()


        if (username === process.env.NEXT_ADMIN_USERNAME && password === process.env.NEXT_ADMIN_USERNAME) {
            return SuccessResponse(username, 'Authentication successful')
        } else {
            return ErrorResponse('Invalid credentials', 401)
        }
    } catch (error) {
        return ErrorResponse('Authentication failed')
    }
}


