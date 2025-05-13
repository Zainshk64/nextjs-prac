import { NextRequest } from "next/server";

export async function GET(req) {
    return NextRequest.json({'text': 'User Register Successfully'})
}
