"use client";
import { PostProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Post = ({ id, title, content, author }: PostProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm("You want to delete post?");
    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
          method: "DELETE",
        });

        if (!res.ok) {
          throw new Error("Failed to delete post.");
        }
        router.refresh();
        router.push("/");
      } catch (error) {
        throw error;
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-start md:w-[300px] h-[200px] max-h-[200px] border bg-white hover:bg-gray-50 ease-in duration-300 cursor-pointer shadow-md p-4 rounded-md md:my-2 border-gray-200">
      <p className="font-bold mb-2 text-xl text-APP_BLACK">{title}</p>
      <p className="font-light text-gray-700 text-[16px] flex-1">{content}</p>

      {/* <Image
          src={imgUrl}
          width={200}
          height={50}
          alt="post image"
          className="object-contain my-2"
        /> */}
      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex gap-4 items-center">
          <Link
            href={`/post/${id}`}
            className="font-light capitalize text-base text-gray-600 cursor-pointer hover:text-APP_GREEN"
          >
            Edit
          </Link>

          <button
            type="button"
            onClick={handleDelete}
            className="font-light text-red-500 cursor-pointer"
          >
            Delete
          </button>
        </div>

        <p className="font-light capitalize text-base text-gray-600 cursor-pointer">
          {author}
        </p>
      </div>
    </div>
  );
};

export default Post;
