/**
 * Projects.jsx — Featured project cards with details and links.
 */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Star, ChevronDown, ChevronUp, CheckCircle2, AlertTriangle } from 'lucide-react'
import { projects } from '../../data/portfolioData'

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className={`project-card ${project.highlight ? 'lg:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      {/* Card top accent */}
      <div className="h-[3px] bg-gradient-to-r from-cyber-cyan via-purple-500 to-transparent" />

      <div className="p-6 sm:p-8 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            {project.featured && (
              <div className="flex items-center gap-1.5 mb-2">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="font-mono text-[10px] text-yellow-400 tracking-widest uppercase">Featured Project</span>
              </div>
            )}
            <h3 className="font-display font-bold text-lg text-cyber-white leading-tight">{project.title}</h3>
            <p className="font-mono text-xs text-cyber-cyan mt-1">{project.subtitle}</p>
          </div>
          <span className={`flex-shrink-0 px-2 py-1 rounded font-mono text-[10px] ${
            project.status === 'Completed'
              ? 'bg-green-400/10 text-green-400 border border-green-400/20'
              : 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        {/* Expandable section */}
        {(project.challenges || project.achievements) && (
          <>
            <button
              onClick={() => setExpanded(e => !e)}
              className="flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-cyber-cyan transition-colors mb-4"
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? 'Hide Details' : 'Show Details'}
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-5 pb-4">
                    {project.challenges && (
                      <div>
                        <p className="font-mono text-xs text-yellow-400/80 mb-2">// Challenges</p>
                        <ul className="space-y-2">
                          {project.challenges.map((c, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <AlertTriangle size={13} className="text-yellow-400/60 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-400 text-xs">{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.achievements && (
                      <div>
                        <p className="font-mono text-xs text-green-400/80 mb-2">// Achievements</p>
                        <ul className="space-y-2">
                          {project.achievements.map((a, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 size={13} className="text-green-400/80 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-xs">{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              <Github size={14} /> GitHub
            </a>
          ) : (
            <span className="flex items-center gap-1.5 font-mono text-xs text-gray-600 cursor-not-allowed">
              <Github size={14} /> Private
            </span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 font-mono text-xs text-gray-600">
              <ExternalLink size={14} /> Demo N/A
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3">// 05. Projects</p>
          <h2 className="section-title">
            Featured <span className="text-cyber-cyan">Work</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-cyber-cyan to-purple-500 mx-auto mt-4" />
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            A curated selection of projects demonstrating applied cyber security research, secure software development, and forensic analysis.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/nileshpeiris"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-outline inline-flex"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
