import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-xl border border-white/5 bg-zinc-950/60 p-6 transition hover:border-emerald-300/30 hover:bg-zinc-950">
      <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <span className="font-mono text-xs text-zinc-500">{project.years}</span>
      </header>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-emerald-300/80">
        {project.role} · {project.company}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-zinc-300">
        {project.summary}
      </p>
      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-zinc-400">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="select-none text-emerald-300/60">›</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-300"
          >
            {tech}
          </li>
        ))}
      </ul>
      {project.links && project.links.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-3 font-mono text-xs">
          {project.links.map((l) => (
            <li key={l.url}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300/80 hover:text-emerald-200"
              >
                {l.label} →
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
