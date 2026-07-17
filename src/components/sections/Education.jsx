/**
 * Education.jsx — Animated vertical timeline for academic history.
 */
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { education } from '../../data/portfolioData'

const COLOR_MAP = {
  cyan: { border: 'border-cyber-cyan', text: 'text-cyber-cyan', bg: 'bg-cyber-cyan', dot: '#00d4ff', glow: 'shadow-neon-cyan' },
  purple: { border: 'border-purple-500', text: 'text-purple-400', bg: 'bg-purple-500', dot: '#7c3aed', glow: 'shadow-neon-purple' },
  green: { border: 'border-green-400', text: 'text-green-400', bg: 'bg-green-400', dot: '#00ff88', glow: 'shadow-neon-green' },
}

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3">// 02. Education</p>
          <h2 className="section-title">
            Academic <span className="text-cyber-cyan">Background</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-cyber-cyan to-purple-500 mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan/50 via-purple-500/30 to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {education.map((edu, i) => {
              const c = COLOR_MAP[edu.color] || COLOR_MAP.cyan
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={edu.id}
                  className={`relative flex flex-col sm:flex-row ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-start gap-6`}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Card */}
                  <div className="flex-1 glass-card p-6 relative">
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] ${c.bg} rounded-t-xl opacity-60`} />

                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className={`font-display font-bold text-lg ${c.text}`}>{edu.institution}</h3>
                        <p className="text-cyber-white font-medium text-sm mt-1">{edu.degree}</p>
                      </div>
                      <div className="w-10 h-10 border flex-shrink-0 flex items-center justify-center rounded"
                        style={{ borderColor: c.dot }}>
                        <GraduationCap size={18} className={c.text} />
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="flex items-center gap-1 font-mono text-xs text-gray-400">
                        <Calendar size={11} /> {edu.period}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs text-gray-400">
                        <MapPin size={11} /> {edu.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{edu.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {edu.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className={`${c.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-300 text-xs">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {edu.gpa && (
                      <div className={`mt-4 inline-flex items-center gap-2 px-3 py-1 rounded ${c.bg}/10 border ${c.border}/30`}>
                        <span className={`font-mono text-xs font-bold ${c.text}`}>GPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>

                  {/* Timeline dot — visible on sm+ */}
                  <div className="hidden sm:flex flex-col items-center justify-start pt-5 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full border-2 z-10"
                      style={{ background: '#020408', borderColor: c.dot, boxShadow: `0 0 10px ${c.dot}` }} />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
