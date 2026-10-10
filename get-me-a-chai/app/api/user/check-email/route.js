import dbConnect from "@/lib/mongoose";
import Users from "@/models/Users";
import { NextResponse } from "next/server";

export async function POST(request) {

    try {
        await dbConnect();
        const { email } = await request.json();

        const user = await Users.findOne({ email: email })

        if (user) {
            return NextResponse.json({
                exists: true
            },
                {status: 200}
            )
        }


        return NextResponse.json(
            {
                exists: false
            },
            { status: 200 }
        )

    } catch (err) {
        return NextResponse.json(
            {
                success: false,
                
            },
            { status: 500 }
        )
    }
}