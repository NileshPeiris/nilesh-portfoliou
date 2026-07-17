/**
 * Skills.jsx — Categorised skill cards with animated bars.
 */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Shield, Terminal, Cpu, Users } from 'lucide-react'
import { skillCategories } from '../../data/portfolioData'

const ICON_MAP = { Code2, Shield, Terminal, Cpu, Users }

function SkillBar({ name, level, color, index }) {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-gray-300">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id)
  const activeCategory = skillCategories.find(c => c.id === activeTab)

  return (
    <section id="skills" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3">// 04. Skills</p>
          <h2 className="section-title">
            Technical <span className="text-cyber-cyan">Arsenal</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-cyber-cyan to-purple-500 mx-auto mt-4" />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skillCategories.map(cat => {
            const Icon = ICON_MAP[cat.icon]
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded border font-mono text-xs transition-all duration-300 ${
                  isActive
                    ? 'border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan shadow-neon-cyan'
                    : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                }`}
                aria-pressed={isActive}
              >
                {Icon && <Icon size={13} />}
                {cat.label}
              </button>
            )
          })}
        </motion.div>

        {/* Active category panel */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card-static p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            {(() => {
              const Icon = ICON_MAP[activeCategory.icon]
              return Icon ? <Icon size={20} style={{ color: activeCategory.color }} /> : null
            })()}
            <h3 className="font-display font-bold text-lg" style={{ color: activeCategory.color }}>
              {activeCategory.label}
            </h3>
            <span className="font-mono text-xs text-gray-500 ml-auto">
              {activeCategory.skills.length} skills
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {activeCategory.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={activeCategory.color}
                index={i}
              />
            ))}
          </div>
        </motion.div>

        {/* All skills quick view */}
        <motion.div
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="glass-card p-4 text-left"
            >
              <p className="font-mono text-xs mb-2" style={{ color: cat.color }}>{cat.label}</p>
              <p className="font-mono text-2xl font-bold text-cyber-white">{cat.skills.length}</p>
              <p className="font-mono text-[10px] text-gray-500 mt-1">competencies</p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
