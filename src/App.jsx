/**
 * App.jsx — Root application component.
 * Manages theme, loading state, and section routing.
 */
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Layout
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import ParticleCanvas from './components/ParticleCanvas'
import LoadingScreen from './components/LoadingScreen'

// Sections
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Terminal from './components/sections/Terminal'
import Contact from './components/sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  // Simulate loading sequence
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  // Apply theme class to document root
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <div className={`min-h-screen cyber-bg relative ${theme === 'light' ? 'bg-slate-100 text-slate-900' : ''}`}>
          {/* Floating particles */}
          <ParticleCanvas />

          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Navigation */}
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          {/* Main content */}
          <main>
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Terminal />
            <Certifications />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Back to top button */}
          <BackToTop />
        </div>
      )}
    </>
  )
}
