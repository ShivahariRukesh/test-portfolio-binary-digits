import pool from "@/app/lib/db";
import { addProjectService } from "@/app/services/project/projectServices";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {

    try {
        const res = await pool.query('SELECT * FROM project')
        return NextResponse.json({ success: true, data: res.rows, error: '' }, { status: 200 })
    } catch (err) {
        console.log('The error is:', err)
        return NextResponse.json({ success: false, data: [], error: 'Failed to fetch projects' }, { status: 500 })
    }
}


export async function POST(request: NextRequest) {
    const formData = await request.formData()

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const image = formData.get('image') as File;

    const serviceData = await addProjectService({ title, description, category, image })



    try {

        const res = await pool.query(`INSERT INTO project (title, description, image, category) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
            [serviceData.title, serviceData.description, serviceData.image, serviceData.category])
        return NextResponse.json({ success: true, data: res.rows[0], error: '' }, { status: 201 })

    } catch (err) {
        console.log("The error is :", err)

        return NextResponse.json({ success: false, data: [], error: 'Failed to insert the project' }, { status: 500 })
    }
}













