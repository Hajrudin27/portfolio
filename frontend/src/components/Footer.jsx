export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-10">
      <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-neutral-600 dark:text-neutral-300 flex flex-wrap items-center gap-3">
        <span>© {year} Hajrudin Kardasevic</span>
        <span className="text-neutral-300">•</span>
        <a href="https://github.com/Hajrudin27" target="_blank" rel="noreferrer" className="hover:underline">
          GitHub
        </a>
        <span className="text-neutral-300">•</span>
        <a href="https://www.linkedin.com/in/hajrudin-kardasevic-582452346/" target="_blank" rel="noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <span className="text-neutral-300">•</span>
        <a href="mailto:hajrokardas@gmail.com" className="hover:underline">Email</a>
      </div>
    </footer>
  );
}
