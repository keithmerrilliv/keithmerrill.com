import Link from "next/link";
import { LSystemHero } from "@/components/LSystemHeroClient";

export default function Home() {
  return (
    <main className="relative">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <LSystemHero />
        </div>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-20 text-center sm:items-start sm:pb-24 sm:pl-16 sm:text-left">
          <div className="pointer-events-auto max-w-xl px-6 sm:px-0">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300/70">
              Sr. Software Engineer · visionOS · 3D Graphics
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Keith Merrill
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
              Twenty years building GPU-intensive apps and games — currently on
              visionOS at OnePlanet, previously nine years inside Apple&rsquo;s
              graphics, games, and machine learning frameworks.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-sm">
              <Link
                href="/projects"
                className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-4 py-2 text-emerald-100 transition hover:bg-emerald-300/20"
              >
                view projects →
              </Link>
              <a
                href="https://linkedin.com/in/keithmerrilliv"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-zinc-300 transition hover:border-white/30 hover:text-white"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-black px-6 py-24 sm:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            About
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-zinc-300">
            <p>
              I&rsquo;m a senior software engineer with extensive experience
              across games, apps, and developer tooling. I&rsquo;ve worked on
              fun games at Zynga, EA, Disney, and Piranha Games; built apps
              and prototypes for a wide range of clients; and spent nine years
              at Apple helping developers ship GPU-intensive software on every
              Apple device released since 2016.
            </p>
            <p>
              My current focus is visionOS and 3D graphics at OnePlanet —
              SharePlay-synchronized RealityKit experiences, GPU particle
              systems with WebGPU/WGSL and Metal, and a Three.js text-to-3D
              tool.
            </p>
            <p>
              I&rsquo;m a dual citizen of the United States and Canada based
              in Santa Clara, California.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
