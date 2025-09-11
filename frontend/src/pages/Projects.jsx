const PROJECTS = [
  {
    title: "To-do App (Fullstack)",
    description:
      "CRUD, login (JWT), React + Node/Express + Postgres. CI/CD og Docker-compose.",
    tags: ["React", "Node", "Postgres", "JWT"],
    github: "https://github.com/Hajrudin27/my-todo-app",
    demo: "#",
  },
  {
    title: "Offentlige Data Dashboard",
    description:
      "Interaktive grafer og filtre på dataset fra data.gov.dk. Visualisering med Chart.js.",
    tags: ["React", "FastAPI", "Chart.js"],
    github: "https://github.com/Hajrudin27/data-dashboard",
    demo: "#",
  },
  {
    title: "Chat-app (WebSockets)",
    description:
      "Real-time chat med flere brugere. Fokus på netværksprogrammering.",
    tags: ["Node", "WebSockets"],
    github: "https://github.com/Hajrudin27/chat-app",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-1">Projekter</h1>
      <p className="text-neutral-700 mb-6">
        Udvalgte projekter med links til GitHub og (hvis muligt) live demo.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {PROJECTS.map((p) => (
          <div key={p.title} className="border rounded-xl p-4 bg-white shadow-sm">
            <h2 className="font-semibold text-lg">{p.title}</h2>
            <p className="text-sm text-neutral-700 mt-1">{p.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-4">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
