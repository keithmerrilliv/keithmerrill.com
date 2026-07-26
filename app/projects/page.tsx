import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected professional and personal work by Keith Merrill — visionOS, Apple frameworks, games, and graphics.",
};

export default function ProjectsPage() {
  const professional = projects.filter((p) => p.category === "professional");
  const personal = projects.filter((p) => p.category === "personal");

  return (
    <main className="px-6 pb-24 pt-32 sm:px-16">
      <div className="mx-auto max-w-3xl">
        <header>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300/70">
            Selected work
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
            A curated slice of twenty years across visionOS, Apple developer
            technologies, games, and graphics tooling. Pulled from a longer
            résumé — ask me about anything you don&rsquo;t see here.
          </p>
        </header>

        <section className="mt-16">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            Professional
          </h2>
          <div className="mt-6 grid gap-5">
            {professional.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {personal.length > 0 && (
          <section className="mt-16">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Personal & Academic
            </h2>
            <div className="mt-6 grid gap-5">
              {personal.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
