import React from "react";

export default function Button({
  title = "Title",
  subtitle = "Subtitle",
  link = "#",
}) {
  return (
    <a
      className="rounded-md px-2.5 py-3.5 text-left flex flex-col hover:bg-gray-100 duration-200 group"
      href={link}
      target="_blank"
    >
      <div className="group-hover:translate-x-3 transition">
        <div>{title}</div>
        <div>{subtitle} &#8599;</div>
      </div>
    </a>
  );
}
