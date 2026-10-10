import dbConnect from "@/lib/mongoose";
import Users from "@/models/Users";
import { NextResponse } from "next/server";

export async function POST(request){
    
    try{
        await dbConnect();
        const {name, username,email,imgURL,coverURL} = await request.json();
        const newUser = new Users({name, username,email,imgURL,coverURL})
        await newUser.save()
        return NextResponse.json(
      {
        success: true,
        message: 'User created successfully!'
      },
      { status: 201 }
    )

    }catch(err){
        return NextResponse.json(
            { 
                success: false,
                message: 'User failed to create'
             },
            { status: 500 }
        )
    }
}

export async function GET(request){
    try{
        await dbConnect();
        const users = await Users.findOne({name: "Ali"})

        return NextResponse.json(users)
    }catch(err){
        return NextResponse.json(
            { error: "Something went wrong", details: err.message },
            { status: 500 }
        )
    }
}

export async function PATCH(request){
    try{
        await db.connext();
        const updation = await request.json();

    }catch{

    }
}