// app/api/users/route.js
import dbConnect from '@/lib/mongodb';
import Url from '@/models/Url';
import { NextResponse } from 'next/server';

export async function GET() {
    await dbConnect();
    const shortUrls = await Url.find({});
    return Response.json({ shortUrls });
}

export async function POST(request) {
    const body = await request.json();

    await dbConnect();

    const { url, shortUrl } = body;
    const data = await Url.create({ url, shortUrl });
    return NextResponse.json(
        {
            success: true,
            message: 'short url created sucessfully'
        },
        { status: 201 }
    );
}