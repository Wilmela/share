"use client";
import PostInput from "@/components/PostInput";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

type User = {
  email: string;
  password: string;
};
const SignUp = () => {
  const router = useRouter();

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      alert("something went wrong!");
    }

    router.replace("/profile");
  };

  return (
    <section>
      <p className="font-bold text-3xl text-center my-4 headingText bg-text">
        Sign In.
      </p>

      <div className="flex-1">
        <form
          onSubmit={handleSubmit}
          className="w-full flex-1 flex flex-col items-center gap-3 lg:w-[60%] mx-auto"
        >
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
            Sign in
          </button>
          <Link className="text-center my-2" href="/auth/sign-up">
            Sign-up
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
