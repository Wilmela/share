"use client";
import PostInput from "@/components/PostInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type User = {
  name: string;
  email: string;
  password: string;
};
const SignUp = () => {
  const router = useRouter();

  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        body: JSON.stringify(user),
      });
      if (!res.ok) {
        throw new Error("Failed to create user.");
      }
      router.push("/");
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="flex-1">
      <p className="font-bold text-3xl text-center my-4 headingText bg-text">
        Sign up.
      </p>

      <div className="flex-1">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center gap-3 lg:w-[60%] mx-auto"
        >
          <PostInput
            name="name"
            // value={user.name}
            onChange={handleChange}
            type="text"
            placeholder="Username"
          />

          <PostInput
            name="email"
            // value={user.email}
            onChange={handleChange}
            type="text"
            placeholder="Email"
          />

          <PostInput
            name="password"
            // value={user.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full p-4 rounded-md text-white bg-green-500"
          >
            Sign up with credentials
          </button>

          <Link className="text-center my-2" href="/auth/sign-in"></Link>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
