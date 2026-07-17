/**
 * Certifications.jsx — Certificate gallery with issuer branding.
 */
import { motion } from 'framer-motion'
import { Award, ExternalLink, Shield, Cpu } from 'lucide-react'
import { certifications } from '../../data/portfolioData'

// Simple issuer logos via colored SVG placeholders
function IssuerLogo({ type, color }) {
  if (type === 'cisco') {
    return (
      <div className="w-10 h-10 rounded flex items-center justify-center" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
        <Cpu size={20} style={{ color }} />
      </div>
    )
  }
  return (
    <div className="w-10 h-10 rounded flex items-center justify-center" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
      <Shield size={20} style={{ color }} />
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3">// 07. Certifications</p>
          <h2 className="section-title">
            Professional <span className="text-cyber-cyan">Credentials</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-cyber-cyan to-purple-500 mx-auto mt-4" />
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            Industry-recognised certifications from leading organisations in networking, cyber security, and technology.
          </p>
        </motion.div>

        {/* Cert grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Card top stripe */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
                style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
              />

              <div className="flex items-start gap-4 mb-4">
                <IssuerLogo type={cert.logo} color={cert.color} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-cyber-white font-semibold text-sm leading-tight">{cert.name}</h3>
                  <p className="font-mono text-xs mt-1" style={{ color: cert.color }}>{cert.issuer}</p>
                </div>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed mb-4">{cert.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Award size={12} className="text-gray-500" />
                  <span className="font-mono text-xs text-gray-500">{cert.date}</span>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-xs hover:text-cyber-cyan transition-colors"
                    style={{ color: cert.color }}
                  >
                    <ExternalLink size={11} />
                    Verify
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credly link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.credly.com/users/nilesh-peiris"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-outline inline-flex"
          >
            <Award size={16} />
            View All Badges on Credly
          </a>
        </motion.div>
      </div>
    </section>
  )
}
