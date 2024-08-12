import Button from "@/components/Button/Button";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// grab md content from the ./projects folder
import { getProjectsData } from "../lib/projects";
export async function getStaticProps() {
  const allPosts = getProjectsData();
  return {
    props: {
      allPosts,
    },
  };
}

// all posts refers to the project content
export default function Home({ allPosts }) {
  return (
    <main>
      <div className="grid gap-4 m-12">
        <a className="hover:opacity-50">Yee Loong Tang</a>
        <h2 className="text-5xl">
          A visionary orchestrator who turns ideas into commercial
          realities—with an itch for scaling projects.
        </h2>
        <div className="flex flex-row gap-2 items-center">
          <div className="rounded-full size-4 bg-black"></div>
          <p className="w-[20ch]">Currently designing at Ensemble Systems.</p>
        </div>
        <div className="max-w-64">
          <Button
            title="Resume"
            subtitle="Currently@TEDxSFU"
            link="resume/resume.pdf"
          />

          {allPosts.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              role={project.role}
              year={project.year}
              link={`/project/${project.slug}`}
              cover={project.cover}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
