import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json()


        if (username === "admin" && password === "admin") {
            return NextResponse.json({ success: true, message: 'Authentication successful' })
        } else {
            return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Authentication failed' + error }, { status: 500 })
    }
}


