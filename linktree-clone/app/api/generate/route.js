 
import clientPromise from "@/lib/mongodb";

export async function GET(request){
    const client = await clientPromise;
    
    const db = client.db('bittree');
    
    const collection = db.collection('links');

    const handle = request.json();

    const result = collection.findOne({handle: handle});

    return Response.json({result: result});

}

export async function POST(request){

    const body = await request.json();

    const client = await clientPromise;

    const db = client.db("bittree");

    const collection = db.collection("links");

    const sameHandle = await collection.findOne({handle: body.handle})

    if(sameHandle){
     return Response.json({success: false, error: true, message: "NOT ADDED", result: null})

    }

    const result = await collection.insertOne(body);

    return Response.json({success: true, error: false, message: "ADDED", result: result})

}