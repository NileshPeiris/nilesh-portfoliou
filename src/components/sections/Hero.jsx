/**
 * Hero.jsx — Full-viewport hero section with typing animation, particle bg, and CTAs.
 */
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Download, ChevronDown, Github, Linkedin, Award, ExternalLink, Shield, Terminal } from 'lucide-react'
import { personal } from '../../data/portfolioData'

// Build the typing sequence array from taglines
const typingSequence = personal.taglines.flatMap(t => [t, 2000])

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyber-cyan/5 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-pink-500/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text content */}
          <div>
            {/* Pre-title badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="badge-cyber">
                <Terminal size={12} />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              className="font-mono text-cyber-cyan text-sm mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              &gt; Hello, World! I am —
            </motion.p>

            {/* Name */}
            <motion.h1
              className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-none mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text-cyan">Nilesh</span>
              <br />
              <span className="text-cyber-white">Peiris</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              className="h-8 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="font-mono text-base sm:text-lg text-gray-400">
                <span className="text-cyber-cyan">&gt;&nbsp;</span>
                <TypeAnimation
                  sequence={typingSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-cyber-white"
                />
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-base leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Cyber Security undergraduate at{' '}
              <span className="text-cyber-cyan font-medium">Edith Cowan University</span> with hands-on experience in
              digital forensics, threat detection, malware analysis, and AI-driven security solutions. Based in{' '}
              <span className="text-cyber-white font-medium">Moratuwa, Sri Lanka</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button onClick={scrollToProjects} className="btn-cyber-solid">
                <ExternalLink size={16} />
                View Projects
              </button>
              <button onClick={scrollToContact} className="btn-cyber-outline">
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span className="font-mono text-xs text-gray-600">Find me on:</span>
              {[
                { icon: Linkedin, href: personal.links.linkedin, label: 'LinkedIn' },
                { icon: Github, href: personal.links.github, label: 'GitHub' },
                { icon: Award, href: personal.links.credly, label: 'Credly' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300 rounded"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Avatar / visual */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-[-24px] border border-cyber-cyan/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[-48px] border border-purple-500/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Square avatar frame (aspect 3:4) */}
              <div className="relative aspect-[3/4] w-64 sm:w-80 h-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-cyber-cyan/10 rounded-xl blur-2xl pointer-events-none" />

                {/* Avatar container */}
                <div className="relative w-full h-full border-2 border-cyber-cyan/40 bg-cyber-card overflow-hidden flex items-center justify-center rounded-xl">
                  {/* Cyber pattern background */}
                  <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-20" />

                  {/* Profile Image */}
                  <img
                    src={`${import.meta.env.BASE_URL}nilesh-photo.jpg`}
                    alt="Mathias Hewage Nilesh Thisun Peiris"
                    className="w-full h-full object-cover relative z-10"
                  />

                  {/* Scan line effect */}
                  <motion.div
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent"
                    animate={{ top: ['-2px', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </div>

                {/* Corner dots */}
                {['top-0 left-4', 'top-0 right-4', 'bottom-0 left-4', 'bottom-0 right-4'].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${pos} w-2 h-2 bg-cyber-cyan rounded-full`}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                ))}
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card-static px-3 py-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="font-mono text-[10px] text-cyber-cyan">🔒 SOC Analyst</p>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 glass-card-static px-3 py-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <p className="font-mono text-[10px] text-green-400">🛡️ Digital Forensics</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="font-mono text-[10px] text-gray-600 tracking-widest">SCROLL</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={16} className="text-cyber-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
