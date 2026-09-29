import { readData } from "@/Helper/util";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest,{params}: {params:Promise<{id:string}>}){
    const {id} = await params;
    const Posts = await readData()

    const Post = Posts.find((item: any) => item.id === Number(id));

    if (!Post) {
        return NextResponse.json({
            id,
            message : "Post Not Found"
        })
    }
    return NextResponse.json(Post,{status:200})

}