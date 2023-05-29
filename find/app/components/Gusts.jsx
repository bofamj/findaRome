import React from "react";
import { costemers } from "../../data/costemer";

export default function Gusts() {
  return (
    <div className="my-2 flex flex-col">
      <label htmlFor="">Party size </label>
      <select
        name=""
        className="py-2 border-b font-light dark:bg-slate-900"
        id=""
        value=""
        //={(e) => setPartySize(e.target.value)}
      >
        {costemers.map((costemer) => {
          return (
            <option value={costemer.value} className="flex">
              {costemer.type}
              {costemer.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
