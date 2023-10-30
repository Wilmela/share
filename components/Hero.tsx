"use client";
import { FormEvent, useState } from "react";
import PostInput from "./PostInput";

const Hero = () => {
  const [post, setPost] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //FIlter post
  };
 
  return (
    <section className="w-full flex flex-col gap-5 justify-center items-center mt-8 md:mt-10 lg:mt-16">
      <p className="headingText bg-text text-center">Make a POST!, SHARE it!</p>
      <p className="font-medium text-[16px] text-center md:text-2xl leading-relaxed lg:mt-4 text-APP_BLACK">
        Got an amazing idea, share it! let your friends be path of it!
        <br className="md:mt-1" /> Together we can make it happen.
      </p>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[60%] flex mt-2 md:mt-4 shadow-md"
      >
        <PostInput
          type="text"
          placeholder="Search a post"
          onChange={(e) => setPost(e.target.value)}
        />
        <button
          type="submit"
          className="p-4 bg-APP_GREEN text-APP_BLACK rounded-br-md rounded-tr-md font-medium"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
