import { NextResponse } from "next/server";

export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data: T;

}

export const SuccessResponse = <T>(
    data: T,
    message: string,
    status: number = 200
): NextResponse<ApiResponse<T>> => {
    return NextResponse.json(
        { success: true, data, message },
        { status }
    );
};

export const ErrorResponse = (
    message: string,
    status: number = 500,
    data: any = []
): NextResponse<ApiResponse> => {
    return NextResponse.json(
        { success: false, data, message },
        { status }
    );
};