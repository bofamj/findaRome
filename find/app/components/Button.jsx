import React from "react";

export default function Button({ type }) {
  return (
    <button
      className={
        type === "sign in"
          ? "px-4 py-1 border mr-2 rounded bg-blue-500 text-white dark:bg-dark-bg capitalize"
          : "px-4 py-1 border  rounded capitalize"
      }
    >
      {type === "sign in" ? "sign in" : "register"}
    </button>
  );
}
