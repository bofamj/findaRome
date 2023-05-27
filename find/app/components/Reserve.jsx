import Picker from "./Picker";
import Reviews from "./Reviews";

export default function Reserve() {
  return (
    <section className="w-[20rem] h-[30rem] shadow-md rounded-lg py-5 px-3 ">
      <div className="flex justify-between ">
        <h6 className="mr-3"> $50 $45 night</h6>
        <Reviews ret="5.0" rev="66 reviews" />
      </div>
      <div className="mt-5 m-auto">
        <Picker />
      </div>
    </section>
  );
}
//
