import { redirect } from "next/navigation";
import dbConnect from '@/lib/mongodb';
import Url from '@/models/Url';
import { connection } from "next/server";

const page = async({params}) => {

    await connection();

    await dbConnect();

    const shortUrl = (await params).shortUrl;
    const result = await Url.findOne({ shortUrl })
    redirect(result.url)


}

export default page
