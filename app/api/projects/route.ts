import pool from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {

    try {
        const res = await pool.query('SELECT * FROM project')
        return NextResponse.json({ success: true, data: res.rows, error: '' }, { status: 200 })
    } catch (err) {
        console.log('The error is:', err)
        return NextResponse.json({ success: false, data: [], error: 'Failed to fetch projects' }, { status: 500 })
    }
}