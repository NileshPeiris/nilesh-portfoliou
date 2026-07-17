/**
 * ResumeSection.jsx — Resume preview + download CTA.
 */
import { motion } from 'framer-motion'
import { Download, FileText, Eye } from 'lucide-react'
import { personal } from '../../data/portfolioData'

export default function ResumeSection() {
  return (
    <section id="resume" className="relative z-10 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3">// 08. Resume</p>
          <h2 className="section-title">
            My <span className="text-cyber-cyan">Resume</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-cyber-cyan to-purple-500 mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="glass-card-static p-8 sm:p-12 text-center"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Resume preview mockup */}
          <div className="relative mx-auto mb-10 max-w-sm">
            {/* Glow */}
            <div className="absolute inset-0 bg-cyber-cyan/5 blur-2xl rounded-xl" />

            {/* Mock resume page */}
            <div className="relative border border-cyber-cyan/20 rounded-xl overflow-hidden bg-cyber-dark/80">
              {/* Mock header */}
              <div className="h-20 bg-gradient-to-r from-cyber-cyan/10 to-purple-500/10 border-b border-cyber-cyan/10 flex items-center justify-center gap-3">
                <FileText size={24} className="text-cyber-cyan" />
                <div className="text-left">
                  <p className="font-display font-bold text-sm text-cyber-white">Nilesh Peiris</p>
                  <p className="font-mono text-[10px] text-gray-400">Cyber Security Undergraduate</p>
                </div>
              </div>

              {/* Mock content lines */}
              <div className="p-6 space-y-3">
                {[
                  { label: 'Education', w: 'w-1/3', color: 'bg-cyber-cyan/40' },
                  { label: '', w: 'w-full', color: 'bg-gray-700/50' },
                  { label: '', w: 'w-5/6', color: 'bg-gray-700/50' },
                  { label: 'Skills', w: 'w-1/4', color: 'bg-purple-500/40' },
                  { label: '', w: 'w-full', color: 'bg-gray-700/50' },
                  { label: '', w: 'w-3/4', color: 'bg-gray-700/50' },
                  { label: 'Projects', w: 'w-1/3', color: 'bg-green-400/40' },
                  { label: '', w: 'w-full', color: 'bg-gray-700/50' },
                  { label: '', w: 'w-2/3', color: 'bg-gray-700/50' },
                ].map((line, i) => (
                  <div key={i} className={`h-2 rounded ${line.w} ${line.color}`} />
                ))}
              </div>

              {/* Scan overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent"
                  animate={{ top: [0, '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </div>

            {/* Corner accents */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-4 h-4 border-cyber-cyan`} style={{
                borderTop: pos.includes('top') ? '2px solid #00d4ff' : 'none',
                borderBottom: pos.includes('bottom') ? '2px solid #00d4ff' : 'none',
                borderLeft: pos.includes('left') ? '2px solid #00d4ff' : 'none',
                borderRight: pos.includes('right') ? '2px solid #00d4ff' : 'none',
              }} />
            ))}
          </div>

          {/* Text */}
          <h3 className="font-display font-bold text-xl text-cyber-white mb-3">
            Mathias Hewage Nilesh Thisun Peiris
          </h3>
          <p className="text-gray-400 text-sm mb-2">Cyber Security Undergraduate | Aspiring SOC Analyst</p>
          <p className="font-mono text-xs text-gray-600 mb-8">Edith Cowan University · Moratuwa, Sri Lanka</p>

          {/* Download button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={personal.links.resume}
              download
              className="btn-cyber-solid text-base px-8 py-4"
              aria-label="Download Nilesh Peiris resume PDF"
            >
              <Download size={20} />
              Download Resume (PDF)
            </a>
            <a
              href={personal.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-outline"
              aria-label="Preview resume"
            >
              <Eye size={16} />
              Preview
            </a>
          </div>

          <p className="font-mono text-[10px] text-gray-600 mt-6">
            Last updated: July 2025 · PDF Format · ATS Optimised
          </p>
        </motion.div>
      </div>
    </section>
  )
}
