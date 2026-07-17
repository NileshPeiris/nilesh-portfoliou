/**
 * About.jsx — Professional summary, values, and interests.
 */
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Linkedin, Github, Award, Heart, Target, Zap } from 'lucide-react'
import { personal } from '../../data/portfolioData'

const INTERESTS = [
  { icon: '🔍', label: 'Digital Forensics' },
  { icon: '🛡️', label: 'SOC Operations' },
  { icon: '🤖', label: 'AI Security' },
  { icon: '🔬', label: 'Malware Research' },
  { icon: '🌐', label: 'Network Defence' },
  { icon: '📊', label: 'Threat Intelligence' },
]

const VALUES = [
  { icon: Target, label: 'Mission-Driven', text: 'Every security decision serves a clear protective purpose.' },
  { icon: Zap, label: 'Continuous Learning', text: 'Staying ahead of evolving threat landscapes through constant upskilling.' },
  { icon: Heart, label: 'Integrity', text: 'Ethical conduct and transparency in all professional engagements.' },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3">// 01. About Me</p>
          <h2 className="section-title">
            Who <span className="text-cyber-cyan">I Am</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-cyber-cyan to-purple-500 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Bio column */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card-static p-8 space-y-5">
              <p className="font-mono text-xs text-cyber-cyan mb-2">&gt; bio.txt</p>
              {personal.about.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-300 leading-relaxed text-sm sm:text-base">{para}</p>
              ))}
            </div>

            {/* Values */}
            <div>
              <p className="font-mono text-xs text-gray-500 mb-4">// Professional Values</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {VALUES.map(({ icon: Icon, label, text }) => (
                  <div key={label} className="glass-card p-4">
                    <div className="w-8 h-8 border border-cyber-cyan/30 rounded flex items-center justify-center mb-3">
                      <Icon size={16} className="text-cyber-cyan" />
                    </div>
                    <p className="font-mono text-xs text-cyber-cyan mb-1">{label}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right info panel */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Contact info */}
            <div className="glass-card-static p-6">
              <p className="font-mono text-xs text-cyber-cyan mb-4">&gt; contact.json</p>
              <div className="space-y-3">
                {[
                  { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
                  { icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
                  { icon: MapPin, label: personal.location, href: null },
                  { icon: Linkedin, label: 'LinkedIn Profile', href: personal.links.linkedin },
                  { icon: Github, label: 'GitHub Profile', href: personal.links.github },
                  { icon: Award, label: 'Credly Badges', href: personal.links.credly },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon size={14} className="text-cyber-cyan flex-shrink-0" />
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className="font-mono text-xs text-gray-300 hover:text-cyber-cyan transition-colors break-all">
                        {label}
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-gray-300">{label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass-card-static p-6">
              <p className="font-mono text-xs text-cyber-cyan mb-4">&gt; interests[]</p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map(({ icon, label }) => (
                  <span key={label} className="badge-cyber text-[11px]">
                    {icon} {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Career objective */}
            <div className="glass-card-static p-6 border-l-2 border-cyber-cyan">
              <p className="font-mono text-xs text-cyber-cyan mb-2">// Career Objective</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                To secure a position in a Security Operations Centre (SOC) or digital forensics team where I can apply my technical skills in threat detection, incident response, and forensic analysis to protect organisational assets and users.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
