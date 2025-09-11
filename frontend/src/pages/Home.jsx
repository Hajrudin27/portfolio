export default function Home() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
          HK
        </div>
        <div>
          <h1 className="text-3xl font-bold">Hej, jeg er Hajrudin</h1>
          <p className="text-neutral-700">
            Diplomingeniør-studerende i softwareteknologi (3. semester). Jeg bygger små projekter i React/Node.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        <a
          href="https://github.com/Hajrudin27"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 rounded-md text-blue-600 hover:bg-blue-50 border border-blue-200"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/DIT-LINK"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 rounded-md text-blue-600 hover:bg-blue-50 border border-blue-200"
        >
          LinkedIn
        </a>
        <a
          href="mailto:din@mail.dk"
          className="px-3 py-1 rounded-md text-blue-600 hover:bg-blue-50 border border-blue-200"
        >
          Email
        </a>
        <a
          href="#"
          className="px-3 py-1 rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
