import Header from "./components/Header";
import Trending from "./components/Trending";
import PropertyType from "./components/PropertyType";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <Header />
      <Trending />
      <PropertyType />
    </main>
  );
}
