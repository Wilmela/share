"use client";
import PostInput from "@/components/PostInput";
import { PostProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type NewPost = Omit<PostProps, "id">;
const EditForm = ({ id, title, content, author }: PostProps) => {
  const router = useRouter();

  const [post, setPost] = useState<NewPost>({
    title,
    content,
    author,
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify(post),
      });
      if (!res.ok) {
        throw new Error("Failed to update post.");
      }
      router.replace("/");
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="flex-1">
      <p className="font-bold text-3xl text-center my-4 headingText bg-text">
        Edit post.
      </p>

      <div className="flex-1">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 lg:w-[60%] mx-auto">
          <PostInput
            name="title"
            value={post.title}
            onChange={handleChange}
            type="text"
            placeholder="Enter title"
          />
          <textarea
            cols={5}
            value={post.content}
            placeholder="content"
            name="content"
            onChange={handleChange}
            className="p-4 rounded-md w-full font-light text-lg"
          />

          <PostInput
            name="author"
            value={post.author}
            onChange={handleChange}
            type="text"
            placeholder="Enter author"
          />

          <button
            type="submit"
            className="p-4 rounded-md text-white bg-green-500"
          >
            Update Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditForm;
