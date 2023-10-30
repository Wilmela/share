import React from "react";
import { PostInputProps } from "@/types";

const PostInput = ({ type, onChange, placeholder, ref,name, value }: PostInputProps) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      ref={ref}
      name={name}
      value={value}
      className="w-full p-4 rounded-bl-md rounded-tl-md border-none outline-none text-APP_BLACK bg-white font-light"
    />
  );
};

export default PostInput;
