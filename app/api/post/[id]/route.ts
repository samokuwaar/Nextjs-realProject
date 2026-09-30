import { readData, writeData } from "@/Helper/util";
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

export async function PUT(request: NextRequest,{params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const posts = await readData()
    const {name,body} = await request.json()

    const postIndex = posts.findIndex((item: any)=>item.id === Number(id))

    if (postIndex === -1) {
        return NextResponse.json({
            id,
            message : "Post Not Found"
        })
    }
    posts[postIndex] = {...posts[postIndex],name,body}
    await writeData(posts)
    return NextResponse.json(posts[postIndex],{status:200})
}

export async function DELETE(req: NextRequest,{params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const posts = await readData()
    const postIndex = posts.findIndex((item: any)=>item.id === Number(id))

    if (postIndex === -1) {
        return NextResponse.json({
            id,
            message : "Post Not Found"
        })
    }
    posts.splice(postIndex,1)
    await writeData(posts)
    return NextResponse.json({id,message:"Post Deleted"},{status:200})

}