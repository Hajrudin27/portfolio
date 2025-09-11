import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      {/* Card-like hero */}
      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Avatar */}
          <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            HK
          </div>

          {/* Text */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Hej, jeg er Hajrudin</h1>
            <p className="mt-1 text-neutral-700 dark:text-neutral-300">
              Diplomingeniør-studerende i softwareteknologi (3. semester).
              Jeg bygger projekter i React/Node og lærer nyt hver uge.
            </p>

            {/* Availability badge */}
            <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
              <span>Open to student assistant roles (8–20 hrs/week)</span>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-wrap gap-3">
              <Link to="/projects" className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Se projekter
              </Link>
              <a
                href="https://github.com/Hajrudin27"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md border border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/DIT-LINK"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md border border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
              >
                LinkedIn
              </a>
              <a
                href="mailto:din@mail.dk"
                className="px-4 py-2 rounded-md border border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
              >
                Email
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-4 py-2 rounded-md text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-white"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Tech badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["React", "JavaScript", "Node.js", "Tailwind CSS", "Postgres", "Docker"].map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-neutral-800 dark:text-blue-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
