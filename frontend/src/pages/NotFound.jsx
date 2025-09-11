import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 py-12 text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-500">Error</p>
        <h1 className="mt-2 text-5xl font-extrabold">404</h1>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          The page you’re looking for doesn’t exist.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Back to Home
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 rounded-md border border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
