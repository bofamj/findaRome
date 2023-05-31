import Cost from "./Cost";
import Gusts from "./Gusts";
import Picker from "./Picker";
import Reviews from "./Reviews";

export default function Reserve() {
  return (
    <section className="w-[20rem] h-[30rem] shadow-md rounded-lg py-5 px-3 text-slate-900 relative ">
      <div className="flex justify-between ">
        <h6 className="mr-3"> $50 $45 night</h6>
        <Reviews ret="5.0" rev="66 reviews" />
      </div>
      <div className="mt-5 m-auto">
        <Picker />
      </div>
      <div className="relative mb-4 h-20 bg-white">
        <Gusts />
      </div>
      <button className="py-2 px-[7.5rem] rounded text-white   bg-pink-800">
        Reserve
      </button>
      <Cost />
    </section>
  );
}
//
