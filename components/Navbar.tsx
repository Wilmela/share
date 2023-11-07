"use client";
import { useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isActive, setIsActive] = useState("/");
  const { data, status } = useSession();
  console.log(data?.user?.name);

  // const pathname = usePathname();
  const isAuthenticated = status === "authenticated";

  return (
    <nav className="border-b">
      <Link
        href="/"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white"
      >
        <Image
          src="/logo.png"
          alt="TM"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>

      <p
        className="md:hidden cursor-pointer"
        onClick={() => setIsToggled((prev: boolean) => !prev)}
      >
        {isToggled ? "close" : "open"}
      </p>

      <ul
        className={`${
          isToggled
            ? "flex flex-col gap-2 absolute top-[56px] right-0 w-[100px] bg-gradient-to-br from-blue-300 to-white z-10 rounded-md items-end justify-start pr-4 py-4"
            : "hidden md:flex gap-8 items-center"
        }`}
      >
        {navLinks.map((link) => {
          // const isActive = pathname.startsWith(link.url);
          return (
            <Link
              key={link.id}
              href={link.url}
              className={`${
                isActive === link.url ? "text-APP_GREEN" : "text-APP_BLACK"
              } `}
              onClick={() => {
                setIsToggled(false);
                setIsActive(link.url);
              }}
            >
              {link.id}
            </Link>
          );
        })}
        <li>
          {!isAuthenticated ? (
            <Link href="/auth/sign-in">sign-in</Link>
          ) : (
            <Button
              variant="secondary"
              type="button"
              className="p-2 border border-green-500 rounded-md"
              onClick={() => signOut()}
            >
              Sign-out
            </Button>
          )}
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
