import React from "react";

export default function Footer() {
  const thisYeare = new Date().getFullYear();

  return (
    <footer className="mt-10 py-10 flex items-center justify-center  px-24 bg-slate-900 text-white dark:text-slate-900 dark:bg-gray-100">
      <h1>Copyright &copy; Mustafa m Jaber {thisYeare} </h1>
    </footer>
  );
}
