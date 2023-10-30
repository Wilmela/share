import React from "react";

export interface PostProps {
  id: string;
  title: string;
  content: string;
  // imgUrl: string;
  author: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

export type PostInputProps = {
  type: "text" | "password" | "password" | "file";
  placeholder?: string;
  name?: string;
  value?: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  ref?: React.LegacyRef<HTMLInputElement>;
};
