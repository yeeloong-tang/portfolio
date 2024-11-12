import { serialize } from "next-mdx-remote/serialize";
import { getProjectData, getAllProjectsId } from "@/lib/projects";
import React from "react";
import { MDXRemote } from "next-mdx-remote";

export async function getStaticPaths() {
  const paths = getAllProjectsId();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = getProjectData(params.id);

  return {
    props: {
      meta: projectData.meta,
      content: await serialize(projectData.content),
    },
  };
}

// Project component starts
export default function Project({ meta, content }) {
  return (
    <div>
      <h1>Name: {meta.name}</h1>
      <div>role: {meta.role}</div>
      <div>{meta.year}</div>
      <MDXRemote {...content} components={{ h1: H1Component, p: PComponent }} />
    </div>
  );
}

const H1Component = ({ children }) => {
  return <h1 className="text-4xl font-bold">{children}</h1>;
};

const PComponent = ({ children }) => {
  return <p className="text-lg">{children}</p>;
};
