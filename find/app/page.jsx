import Image from "next/image";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Trending from "./components/Trending";
import PropertyType from "./components/PropertyType";

export default function Home() {
  return (
    <main className=" min-h-screen  text-slate-800  bg-gray-100 dark:bg-zinc-900">
      <NavBar />
      <Header />
      <Trending />
      <PropertyType />
    </main>
  );
}
