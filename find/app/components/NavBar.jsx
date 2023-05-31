import Button from "./Button";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="px-8 mx-14 py-2 flex items-center justify-between ">
      <div>
        <Link href="/" className="hover:no-underline">
          <h1 className="capitalize cursor-pointer no-underline  font-bold text-2xl dark:text-white">
            myRome
          </h1>
        </Link>
      </div>

      <div className="flex items-center justify-between w-62 ">
        <Button type="sign in" />
        <Button type="register" />
      </div>
    </nav>
  );
}
