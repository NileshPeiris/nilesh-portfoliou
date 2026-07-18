/**
 * Contact.jsx — Professional contact form with social links.
 * Form submissions are sent to nileshthisunpeiris@gmail.com via Formspree.
 */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, Instagram, Facebook } from 'lucide-react'
import { personal } from '../../data/portfolioData'

const CONTACT_METHODS = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'nilesh-peiris-a9b8b2292', href: personal.links.linkedin },
  { icon: Github, label: 'GitHub', value: 'nileshpeiris', href: personal.links.github },
  { icon: Instagram, label: 'Instagram', value: '@nileshpeiris', href: personal.links.instagram },
  { icon: Facebook, label: 'Facebook', value: 'nilesh.thisun.peiris', href: personal.links.facebook },
  { icon: MapPin, label: 'Location', value: personal.location, href: null },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = e => setFormData(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      // Submit via Formspree — replace YOUR_FORM_ID with your actual Formspree form ID
      // Sign up free at https://formspree.io and create a form for nileshthisunpeiris@gmail.com
      const response = await fetch('https://formspree.io/f/xqerqlzj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        // Fallback: open mailto link directly
        const mailtoLink = `mailto:nileshthisunpeiris@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
        window.open(mailtoLink)
        setSubmitted(true)
      }
    } catch {
      // Fallback: open mailto link directly
      const mailtoLink = `mailto:nileshthisunpeiris@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
      window.open(mailtoLink)
      setSubmitted(true)
    }

    setSending(false)
  }

  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3">// 09. Contact</p>
          <h2 className="section-title">
            Get In <span className="text-cyber-cyan">Touch</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-cyber-cyan to-purple-500 mx-auto mt-4" />
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            Open to graduate roles, internships, and collaboration opportunities in cyber security. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Left — contact info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card-static p-6">
              <p className="font-mono text-xs text-cyber-cyan mb-5">&gt; contact_info</p>
              <div className="space-y-5">
                {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 border border-cyber-cyan/20 rounded flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-cyber-cyan" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] text-gray-600 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                          className="font-mono text-xs text-gray-300 hover:text-cyber-cyan transition-colors break-all">
                          {value}
                        </a>
                      ) : (
                        <p className="font-mono text-xs text-gray-300">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card-static p-5 border-l-2 border-green-400">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="font-mono text-xs text-green-400">Available for Opportunities</p>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Actively seeking graduate-level positions in SOC analysis, digital forensics, or incident response. Open to remote and on-site roles globally.
              </p>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card-static p-6 sm:p-8">
              <p className="font-mono text-xs text-cyber-cyan mb-6">&gt; send_message() → nileshthisunpeiris@gmail.com</p>

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={48} className="text-green-400" />
                  <p className="font-display font-bold text-xl text-cyber-white">Message Sent!</p>
                  <p className="text-gray-400 text-sm text-center">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }) }}
                    className="btn-cyber-outline text-xs mt-2"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-mono text-xs text-gray-500 mb-1.5">
                        Name <span className="text-cyber-cyan">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-mono text-xs text-gray-500 mb-1.5">
                        Email <span className="text-cyber-cyan">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block font-mono text-xs text-gray-500 mb-1.5">
                      Subject <span className="text-cyber-cyan">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="e.g. Graduate Role Enquiry / Collaboration"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-gray-500 mb-1.5">
                      Message <span className="text-cyber-cyan">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-input resize-none"
                      placeholder="Tell me about the opportunity or project..."
                    />
                  </div>
                  {error && <p className="font-mono text-xs text-red-400">{error}</p>}
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-cyber-solid w-full justify-center text-sm py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="inline-block"
                        >◌</motion.span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="font-mono text-[10px] text-gray-600 text-center">
                    Messages go directly to nileshthisunpeiris@gmail.com
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
