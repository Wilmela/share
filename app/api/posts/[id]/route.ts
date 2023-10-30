import Post from "@/model/Post";
import { connectDb } from "@/libs/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  await connectDb();

  try {
    const post = await Post.findOne({ _id: id });
    console.log(post);

    if (!post) {
      return NextResponse.json("post not found!", { status: 404 });
    }
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json("Could not find post", { status: 500 });
  }
};

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const { title, content, author } = await req.json();

  try {
    await connectDb();
    const post = await Post.findByIdAndUpdate(id, {
      title,
      content,
      author,
    });

    if (!post) {
      return NextResponse.json("post not found!", { status: 404 });
    }
    return NextResponse.json("Post updated successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json("Could not update post", { status: 500 });
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDb();
    await Post.findByIdAndDelete(params.id);

    return NextResponse.json("Post deleted successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json("Could not delete post", { status: 500 });
  }
};
