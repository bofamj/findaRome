import Image from "next/image";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className=" min-h-screen  text-slate-800  bg-gray-100 dark:bg-zinc-900">
      <NavBar />
      <Header />
    </main>
  );
}
