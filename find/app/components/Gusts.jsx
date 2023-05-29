"use client";
import React from "react";
import { Dropdown } from "@nextui-org/react";
import { costemers } from "../../data/costemer";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Gusts() {
  return (
    <div className="my-2 flex flex-col  border  rounded-lg">
      <div className="py-3 px-4 flex items-center justify-between  rounded-lg">
        <div>
          <h5>GUESTS</h5>
          <p>guest 1</p>
        </div>
        <ArrowDropDownIcon />
      </div>
      <div className="py-3 px-4 hidden">
        {costemers.map((costemer) => {
          return (
            <div className="flex mb-3 items-center justify-between ">
              <div>
                <h6>{costemer.type}</h6>
                <p>{costemer.label}</p>
              </div>
              <div>
                <ArrowLeftIcon />
                {costemer.value}
                <ArrowRightIcon />
              </div>
            </div>
          );
        })}
        <p className="text-xs mt-5">
          This place has a maximum of 2 guests, not including infants. If you're
          bringing more than 2 pets, please let your host know.
        </p>
      </div>
    </div>
  );
}
/* <Dropdown.Item
                  key="new"
                  command={costemer.value}
                  description={costemer.label}
                >
                  {costemer.type}
                </Dropdown.Item> */
