/**
 * Experience.jsx — Professional experience timeline with achievement-focused content.
 */
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2, Tag } from 'lucide-react'
import { experience } from '../../data/portfolioData'

const COLORS = { cyan: '#00d4ff', purple: '#7c3aed', green: '#00ff88' }

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3">// 03. Experience</p>
          <h2 className="section-title">
            Professional <span className="text-cyber-cyan">Journey</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-cyber-cyan to-purple-500 mx-auto mt-4" />
        </motion.div>

        {/* Experience cards */}
        <div className="relative">
          {/* Left vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan/40 via-purple-500/20 to-transparent" />

          <div className="space-y-10 pl-14">
            {experience.map((exp, i) => {
              const color = COLORS[exp.color] || COLORS.cyan

              return (
                <motion.div
                  key={exp.id}
                  className="relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[38px] top-5 w-4 h-4 rounded-full border-2 z-10 flex items-center justify-center"
                    style={{ background: '#020408', borderColor: color, boxShadow: `0 0 12px ${color}80` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                  </div>

                  {/* Card */}
                  <div className="glass-card p-6 sm:p-8">
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl opacity-60"
                      style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-lg" style={{ color }}>{exp.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={13} className="text-gray-500" />
                          <span className="text-cyber-white font-medium text-sm">{exp.company}</span>
                          <span className="text-gray-600">·</span>
                          <span className="font-mono text-xs text-gray-500">{exp.type}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:text-right">
                        <span className="flex items-center gap-1 font-mono text-xs text-gray-400">
                          <Calendar size={11} /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1 font-mono text-xs text-gray-400">
                          <MapPin size={11} /> {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-5">
                      <p className="font-mono text-xs text-gray-500 mb-3">// Key Achievements</p>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color }} />
                            <span className="text-gray-300 text-sm leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <p className="font-mono text-xs text-gray-500 mb-2">// Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
