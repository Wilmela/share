"use client";

import { useRouter } from "next/navigation";

const Button = ({ id }: { id: string }) => {
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
    <button
      type="button"
      onClick={handleDelete}
      className="font-light text-red-500 cursor-pointer"
    >
      Delete
    </button>
  );
};

export default Button;
