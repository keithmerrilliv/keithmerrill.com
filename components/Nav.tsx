import Link from "next/link";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-zinc-100 hover:text-white"
        >
          keith merrill
        </Link>
        <ul className="flex items-center gap-6 font-mono text-sm text-zinc-400">
          <li>
            <Link href="/" className="hover:text-zinc-100">
              home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-zinc-100">
              projects
            </Link>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/keithmerrilliv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-100"
            >
              linkedin
            </a>
          </li>
          <li>
            <a
              href="mailto:keithmerrilliv@gmail.com"
              className="hover:text-zinc-100"
            >
              email
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
