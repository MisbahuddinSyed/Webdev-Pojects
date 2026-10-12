// app/api/users/route.js
import dbConnect from '@/lib/mongodb';
import Url from '@/models/Url';
import { NextResponse } from 'next/server';

export async function GET() {
    await dbConnect();
    const shortUrls = await Url.findOne({ shortUrl });
    return Response.json({ shortUrls });
}

export async function POST(request) {
    const body = await request.json();

    await dbConnect();

    const { url, shortUrl } = body;
    await Url.create({ url, shortUrl });
    return NextResponse.json(
        {
            success: true,
            message: 'short url created sucessfully',
        },
        { status: 201 }
    );
}
// export async function POST(request) {


//     await dbConnect();

//     const { shortUrl } = await request.json()
//     const result = await Url.findOne({ shortUrl });
//     return NextResponse.json(
//         {
//             result
//         },
//         { status: 201 }
//     );
// }