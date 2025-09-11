import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'

export default function App() {
  const linkBase =
    'px-3 py-1 rounded-md text-sm transition-colors';
  const linkInactive =
    'text-blue-600 hover:bg-blue-50';
  const linkActive =
    'bg-blue-600 text-white';

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            About
          </NavLink>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div className="text-neutral-700">Siden blev ikke fundet.</div>} />
        </Routes>
      </main>
    </div>
  )
}
