import EditForm from "@/components/EditForm";
import { PostProps } from "@/types";
import { notFound } from "next/navigation";

const getPostById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    if (!data) {
      return notFound();
    }
    return data;
  } catch (error) {
    throw error;
  }
};

const Edit = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post: PostProps = await getPostById(id);

  return (
    <EditForm
      id={id}
      title={post.title}
      content={post.content}
      author={post.author}
    />
  );
};

export default Edit;
