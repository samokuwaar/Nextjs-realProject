

import { readData, writeData } from "@/Helper/util";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {
    const getData = await readData()
    return NextResponse.json(getData,{status:200})
}

export async function POST(request: NextRequest) {
    const posts = await readData()
    console.log(posts)
    const {name,body} = await request.json()


    const newPost = {id:posts.length+1,name,body}
    posts.push(newPost)
    await writeData(posts)

    return NextResponse.json(newPost,{status:201})
}