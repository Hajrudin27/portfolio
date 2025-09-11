import { useEffect, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const [theme, setTheme] = useState('light')

  // load fra localStorage eller systemets præference
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  // apply + persist
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  const linkBase = 'px-3 py-1 rounded-md text-sm transition-colors'
  const linkInactive = 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-neutral-800'
  const linkActive = 'bg-blue-600 text-white dark:bg-blue-500 dark:text-neutral-900'

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
        <header className="border-b border-neutral-200 dark:border-neutral-800">
          <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2">
            <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
              Home
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
              Projects
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>
              Contact
            </NavLink>

            <div className="ml-auto">
              <button
                onClick={toggleTheme}
                className="px-3 py-1 rounded-md border border-neutral-200 hover:bg-neutral-50
                           dark:border-neutral-700 dark:hover:bg-neutral-800"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="text-neutral-500">Siden blev ikke fundet.</div>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
