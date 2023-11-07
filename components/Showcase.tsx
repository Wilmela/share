import { PostProps } from "@/types";
import { Suspense } from "react";
import Post from "@/components/Post";
import AppSkeleton from "./AppSkeleton";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-cache",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};


const Showcase = async () => {
  const data: (PostProps | any)[] = await getData();

  return (
    <section className="posts mt-4">
      {data.map((post) => {
        return (
          <Suspense
            key={post?._id}
            fallback={<AppSkeleton/>}
          >
            <Post
              key={post?._id}
              id={post?._id}
              author={post?.author}
              content={post?.content}
              title={post?.title}
            />
          </Suspense>
        );
      })}
    </section>
  );
};

export default Showcase;
