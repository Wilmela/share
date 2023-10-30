import React from "react";
import "./global.css";
import { Navbar, Footer } from "@/components";
import { Metadata } from "next";
import AuthProvider from "@/components/AuthProvider";
// import { Poppins } from "next/font/google";
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "500", "700"],
// });

export const metadata: Metadata = {
  title: "Share",
  description: "Share your amazing ideas",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main className="flex-1 px-6 md:px-8 lg:px-40">{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
