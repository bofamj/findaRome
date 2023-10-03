"use client";
import { useState, useContext } from "react";
import { Dropdown } from "@nextui-org/react";
import { costemers } from "../../data/costemer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Gusts({ bedrooms }) {
  const [isHedden, setIsHedeen] = useState(true);
  const [gusts, setGusts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const contentClassname = isHedden ? "max-h-0 " : "max-h-60";

  //*add gests buttons functionality
  const handelAdd = (x) => {
    if (x === "adults") {
      setGusts({ ...gusts, adults: (gusts.adults += 1) });
    } else if (x === "children") {
      setGusts({ ...gusts, children: (gusts.children += 1) });
    } else {
      setGusts({ ...gusts, infants: (gusts.infants += 1) });
    }
    console.log(gusts);
  };

  //*decrease gests buttons functionality
  const handelDecrease = (x) => {
    if (x === "adults") {
      setGusts({ ...gusts, adults: (gusts.adults -= 1) });
    } else if (x === "children") {
      setGusts({ ...gusts, children: (gusts.children -= 1) });
    } else {
      setGusts({ ...gusts, infants: (gusts.infants -= 1) });
    }
    console.log(gusts);
  };

  return (
    <div className="my-2 flex flex-col  border  rounded-lg absolute top-0 left-0  bg-white ">
      <div className="py-3 px-4 flex items-center justify-between  rounded-lg">
        <div>
          <h5>GUESTS</h5>
          <p>guest 1</p>
        </div>
        <ArrowDropDownIcon
          className="text-2xl cursor-pointer"
          onClick={() => setIsHedeen(!isHedden)}
        />
      </div>
      <div
        className={`py-1 px-4 transition-all duration-700 ease-in-out overflow-hidden ${contentClassname}`}
      >
        <div className="flex mb-3 items-center justify-between ">
          <div>
            <h6>Adults</h6>
            <p>Age 13+</p>
          </div>
          <div value={gusts.adults}>
            <ArrowLeftIcon
              className="text-2xl cursor-pointer"
              value={gusts.adults}
              onClick={() => handelAdd("adults")}
            />
            {gusts.adults}
            <ArrowRightIcon
              className="text-2xl cursor-pointer"
              onClick={() => handelDecrease("adults")}
            />
          </div>
        </div>
        <div className="flex mb-3 items-center justify-between ">
          <div>
            <h6>Children</h6>
            <p>Ages 2-12</p>
          </div>
          <div>
            <ArrowLeftIcon
              className="text-2xl cursor-pointer"
              onClick={() => handelAdd("children")}
            />
            {gusts.children}
            <ArrowRightIcon
              className="text-2xl cursor-pointer"
              onClick={() => handelDecrease("children")}
            />
          </div>
        </div>
        <div className="flex mb-3 items-center justify-between ">
          <div>
            <h6>Infants</h6>
            <p>under 2</p>
          </div>
          <div>
            <ArrowLeftIcon
              className="text-2xl cursor-pointer"
              onClick={() => handelAdd("infants")}
            />
            {gusts.infants}
            <ArrowRightIcon
              className="text-2xl cursor-pointer"
              onClick={() => handelDecrease("infants")}
            />
          </div>
        </div>

        <p className="text-xs mt-5 pb-3">
          This place has a maximum of 2 guests, not including infants. If you're
          bringing more than 2 pets, please let your host know.
        </p>
      </div>
    </div>
  );
}
/*{costemers.map((costemer) => {
          return (
            <div className="flex mb-3 items-center justify-between ">
              <div>
                <h6>{costemer.type}</h6>
                <p>{costemer.label}</p>
              </div>
              <div>
                <ArrowLeftIcon className="text-2xl cursor-pointer" />
                {costemer.value}
                <ArrowRightIcon className="text-2xl cursor-pointer" />
              </div>
            </div>
          );
        })} */
