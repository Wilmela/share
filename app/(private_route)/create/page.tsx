"use client";
import PostInput from "@/components/PostInput";
import { PostProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type NewPost = Omit<PostProps, "id">;
const Create = () => {
  const router = useRouter();

  const [post, setPost] = useState<NewPost>({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: JSON.stringify(post),
      });
      if (!res.ok) {
        throw new Error("Failed to create post.");
      }
      router.refresh();
      router.replace("/");
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="flex-1">
      <p className="font-bold text-3xl text-center my-4 headingText bg-text">
        Create a new post.
      </p>

      <div className="w-full flex-1 flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="flex-1">
          <Image src="/logo.png" width={600} height={400} alt="background" />
        </div>

        <div className="flex-1 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-auto">
            <PostInput
              name="title"
              onChange={handleChange}
              type="text"
              placeholder="Enter title"
            />
            <textarea
              cols={5}
              placeholder="content"
              name="content"
              onChange={handleChange}
              className="p-4 rounded-md w-full font-light text-lg"
            />

            <PostInput
              name="author"
              onChange={handleChange}
              type="text"
              placeholder="Enter author"
            />

            <button
              type="submit"
              className="p-4 rounded-md text-white bg-green-500"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Create;
