/**
 * Navbar.jsx — Sticky navigation with active section highlight, theme toggle, and mobile menu.
 */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Shield, Download } from 'lucide-react'
import { personal } from '../data/portfolioData'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.getElementById(href.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cyber-black/95 backdrop-blur-xl border-b border-cyber-cyan/10 shadow-lg'
            : 'bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a
              href="#hero"
              onClick={() => handleNavClick('#hero')}
              className="flex items-center gap-3 group"
              aria-label="Nilesh Peiris — Home"
            >
              <div className="w-8 h-8 border border-cyber-cyan flex items-center justify-center group-hover:bg-cyber-cyan/10 transition-colors"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <Shield size={14} className="text-cyber-cyan" />
              </div>
              <span className="font-display font-bold text-sm text-cyber-white tracking-wider hidden sm:block">
                <span className="text-cyber-cyan">N</span>ILESH<span className="text-gray-500">.</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`nav-link text-xs ${activeSection === href.slice(1) ? 'active text-cyber-cyan' : ''}`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(o => !o)}
                className="md:hidden w-8 h-8 flex items-center justify-center text-gray-400 hover:text-cyber-cyan transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu fixed top-16 left-0 right-0 z-40 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`text-left py-3 font-mono text-sm border-b border-gray-800 last:border-0 ${
                    activeSection === href.slice(1) ? 'text-cyber-cyan' : 'text-gray-400'
                  } hover:text-cyber-cyan transition-colors`}
                >
                  <span className="text-cyber-cyan mr-2">▹</span>{label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
