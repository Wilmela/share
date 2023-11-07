import React from "react";
import "./global.css";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-1 px-6 md:px-8 lg:px-40">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
