"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="px-0 mx-5 py-2 flex items-center justify-between md:px-8 md:mx-14 ">
      <div>
        <Link href="/" className="hover:no-underline">
          <h1 className="capitalize cursor-pointer no-underline  font-bold text-xl md:text-2xl dark:text-white">
            myRome
          </h1>
        </Link>
      </div>

      <div className="flex items-center justify-between w-62 ">
        {session ? (
          <button
            className="px-4 py-1 border mr-2 rounded bg-blue-500 text-white dark:bg-dark-bg capitalize"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        ) : (
          <button
            className="px-4 py-1 border  rounded capitalize"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
}
