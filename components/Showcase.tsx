import { PostProps } from "@/types";
import Post from "./Post";

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
          <div key={post?._id} fallback={<p>loading...</p>}>
            <Post
              title={post.title}
              content={post.content}
              author={post.author}
              id={post?._id}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Showcase;
