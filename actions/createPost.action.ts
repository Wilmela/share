"use server";

import { z } from "zod";
import { dataSchema } from "@/schema";
import { connectDb } from "@/libs/db";
import Post from "@/model/Post";
import { revalidatePath } from "next/cache";

export const createPost = async (data: z.infer<typeof dataSchema>) => {
  try {
    connectDb();

    const parsedData = dataSchema.parse(data);
    const post = await Post.create({ ...parsedData });

    revalidatePath("/create");
    return { post };
  } catch (error) {
    throw error;
  }
};
