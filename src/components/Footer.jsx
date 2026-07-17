/**
 * Footer.jsx — Site footer with social links and attribution.
 */
import { Github, Linkedin, Award, Mail, Shield } from 'lucide-react'
import { personal } from '../data/portfolioData'

const SOCIAL = [
  { icon: Linkedin, href: personal.links.linkedin, label: 'LinkedIn' },
  { icon: Github, href: personal.links.github, label: 'GitHub' },
  { icon: Award, href: personal.links.credly, label: 'Credly' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-cyber-cyan/10 bg-cyber-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-cyber-cyan/40 flex items-center justify-center"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
              <Shield size={12} className="text-cyber-cyan" />
            </div>
            <div>
              <p className="font-display text-xs text-cyber-white tracking-widest">NILESH PEIRIS</p>
              <p className="font-mono text-[10px] text-gray-500">Cyber Security Portfolio</p>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300 rounded hover:shadow-neon-cyan"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Attribution */}
          <div className="text-center md:text-right">
            <p className="font-mono text-[10px] text-gray-500">
              © {year} All rights reserved.
            </p>
            <p className="font-mono text-[10px] text-gray-600 mt-1">
              Designed & Developed by{' '}
              <span className="text-cyber-cyan">Mathias Hewage Nilesh Thisun Peiris</span>
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 section-divider" />
        <p className="text-center font-mono text-[10px] text-gray-700 mt-4">
          Built with React · Vite · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  )
}
