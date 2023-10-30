import { connectDb } from "@/libs/db";
import Post from "@/model/Post";
import { NextResponse } from "next/server";

interface PostRequest {
  title: string;
  content: string;
  author: string;
}
interface PostResponse {
  id: string; //suppose to be a mongoose object.
  title: string;
  content: string;
  author: string;
}
type NewResponse = NextResponse<{ post?: PostResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as PostRequest;
  await connectDb();

  const post = await Post.create({ ...body });

  return NextResponse.json({
    post: {
      id: post._id.toString(),
      title: post.title,
      content: post.content,
      author: post.author,
    },
  });
};

export const GET = async (req: Request) => {
  await connectDb();
  const posts = await Post.find({});

  if (!posts)
    return NextResponse.json({ error: "No post found" }, { status: 404 });

  return NextResponse.json(posts, { status: 200 });
};
