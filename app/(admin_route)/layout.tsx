import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { User } from "@/types";
import { redirect } from "next/navigation";
const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user as User | undefined;

  if (user?.role !== "admin") redirect("/");

  return <>{children}</>;
};

export default Layout;
