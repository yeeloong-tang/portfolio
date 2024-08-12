import Link from "next/link";
import React from "react";

export default function ProjectCard({
  name = "projectName",
  role = "roleAndInvolvement",
  year = "year",
  link = "#",
  cover = "#",
}) {
  return (
    <Link
      class="projectCard block px-2.5 py-3.5 rounded-lg hover:bg-hover transition duration-200 group"
      href={link}
    >
      <div className="imageContainer overflow-hidden rounded-md w-full h-auto object-cover group-hover: drop-shadow-sm">
        <img src={cover} />
      </div>

      <div class="group-hover:translate-x-3 transition pt-1.5">
        <h2>{name}</h2>
        <p>{role}</p>
        <p>{year} &#8599;</p>
      </div>
    </Link>
  );
}
