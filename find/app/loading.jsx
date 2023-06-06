import NavBar from "./components/NavBar";

export default function Loading() {
  return (
    <main>
      <NavBar />
      <div className="py-3 px-36 mt-10 flex flex-col justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            key={num}
            className="animate-pulse bg-slate-200 w-[70%] h-72 m-3 rounded overflow-hidden border cursor-pointer"
          ></div>
        ))}
      </div>
    </main>
  );
}
