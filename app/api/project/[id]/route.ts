import pool from "@/app/lib/database/db";
import { deleteImageFile, uploadImageFile } from "@/app/lib/api/projects";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const { imageFile } = await request.json();

    try {
        const res = await pool.query('DELETE FROM project WHERE id= $1 RETURNING *', [id]);
        deleteImageFile(imageFile)


        if (res.rows.length === 0) {
            return NextResponse.json({ success: false, data: [], error: 'Project not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: res.rows, error: '' }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ success: false, data: [], error: 'Failed to delete the record, Error is: ' + err });
    }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const formData = await request.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;
    const image = formData.get('image') as File;

    const serviceData = await uploadImageFile({ title, description, category, image });

    try {
        const res = await pool.query(
            `UPDATE project
       SET title = $1, description = $2, image = $3, category = $4
       WHERE id = $5 RETURNING *`,
            [serviceData.title, serviceData.description, serviceData.image, serviceData.category, id]
        );


        if (res.rows.length === 0) {
            return NextResponse.json({ success: false, data: [], error: 'Project not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: res.rows, error: '' }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ success: false, data: [], error: 'Failed to update the record' + err });
    }
}