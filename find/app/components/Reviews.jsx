import React from "react";

export default function Reviews({ ret, rev, name }) {
  return (
    <div>
      <span className="pr-2">{ret}</span>
      <span className="pr-5 underline underline-offset-4">{rev}</span>
      <span className="">{name ? name : ""}</span>
    </div>
  );
}
