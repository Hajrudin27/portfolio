const PROJECTS = [
  {
    title: "To-do App (Fullstack)",
    description:
      "CRUD, login (JWT), React + Node/Express + Postgres. CI/CD and Docker Compose.",
    tags: ["React", "Node", "Postgres", "JWT"],
    github: "https://github.com/Hajrudin27/my-todo-app",
    demo: "#",
  },
  {
    title: "Public Data Dashboard",
    description:
      "Interactive charts and filters using an open dataset from data.gov.dk. Chart.js visualizations.",
    tags: ["React", "FastAPI", "Chart.js"],
    github: "https://github.com/Hajrudin27/data-dashboard",
    demo: "#",
  },
  {
    title: "Chat App (WebSockets)",
    description:
      "Real-time chat with multiple users. Focus on network programming.",
    tags: ["Node", "WebSockets"],
    github: "https://github.com/Hajrudin27/chat-app",
    demo: "#",
  },
  {
    title: "Website for Local Business",
    description:
      "CRUD, login (JWT), React + Node/Express + Postgres. CI/CD and Docker Compose.",
    tags: ["React", "Node", "Postgres", "JWT"],
    github: "https://github.com/Hajrudin27/my-todo-app",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Selected projects with links to GitHub and (if available) a live demo.
        </p>
      </header>

      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="group h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-lg leading-snug">{p.title}</h2>

            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              {p.description}
            </p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-neutral-800 dark:text-blue-300"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 underline-offset-4 hover:underline"
              >
                GitHub
              </a>
              <span className="text-neutral-300">•</span>
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 underline-offset-4 hover:underline"
              >
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
