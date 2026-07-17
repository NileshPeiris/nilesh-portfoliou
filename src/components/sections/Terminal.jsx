/**
 * Terminal.jsx — Interactive terminal section demonstrating whoami, skills, experience, education, projects.
 */
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { terminalContent } from '../../data/portfolioData'

const COMMANDS = ['whoami', 'skills', 'experience', 'education', 'projects', 'help', 'clear']
const HELP_OUTPUT = [
  { type: 'output', text: 'Available commands:' },
  { type: 'output', text: '  whoami      — Display personal information' },
  { type: 'output', text: '  skills      — List technical skills' },
  { type: 'output', text: '  experience  — Show professional experience' },
  { type: 'output', text: '  education   — Academic background' },
  { type: 'output', text: '  projects    — Featured projects' },
  { type: 'output', text: '  clear       — Clear terminal' },
  { type: 'output', text: '  help        — Show this help message' },
]

function getOutput(cmd) {
  const c = cmd.trim().toLowerCase()
  if (terminalContent[c]) return terminalContent[c]
  if (c === 'help') return HELP_OUTPUT
  if (c === 'clear' || c === '') return null
  return [{ type: 'output', text: `bash: ${cmd}: command not found. Type 'help' for available commands.` }]
}

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Nilesh Peiris — Cyber Security Portfolio v1.0.0' },
    { type: 'system', text: "Type 'help' for available commands." },
  ])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const bodyRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [history])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim() && input !== '') return

    const cmd = input
    const newHistory = [
      ...history,
      { type: 'command', text: cmd },
    ]

    if (cmd.trim().toLowerCase() === 'clear') {
      setHistory([{ type: 'system', text: 'Terminal cleared. Type help for commands.' }])
    } else {
      const output = getOutput(cmd)
      if (output) {
        newHistory.push(...output)
      }
      setHistory(newHistory)
    }

    setCmdHistory(h => [cmd, ...h])
    setHistIdx(-1)
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = histIdx + 1
      if (next < cmdHistory.length) {
        setHistIdx(next)
        setInput(cmdHistory[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const prev = histIdx - 1
      if (prev < 0) {
        setHistIdx(-1)
        setInput('')
      } else {
        setHistIdx(prev)
        setInput(cmdHistory[prev])
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = COMMANDS.find(c => c.startsWith(input.toLowerCase()))
      if (match) setInput(match)
    }
  }

  // Run 'whoami' automatically on mount
  useEffect(() => {
    setTimeout(() => {
      setHistory(h => [
        ...h,
        { type: 'command', text: 'whoami' },
        ...terminalContent.whoami,
      ])
    }, 800)
  }, [])

  return (
    <section id="terminal" className="relative z-10 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-tag mb-3">// 06. Terminal</p>
          <h2 className="section-title">
            Interactive <span className="text-cyber-cyan">Console</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-cyber-cyan to-purple-500 mx-auto mt-4" />
          <p className="text-gray-500 text-sm mt-4">Type commands to explore my profile interactively.</p>
        </motion.div>

        <motion.div
          className="terminal-window"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal header */}
          <div className="terminal-header">
            <span className="terminal-dot bg-red-500" />
            <span className="terminal-dot bg-yellow-400" />
            <span className="terminal-dot bg-green-400" />
            <span className="ml-3 text-xs text-gray-500 font-mono">nilesh@cyber-portfolio:~$</span>
            {/* Quick commands */}
            <div className="ml-auto flex gap-2">
              {['whoami', 'skills', 'projects'].map(cmd => (
                <button
                  key={cmd}
                  onClick={(e) => { e.stopPropagation(); setInput(cmd) }}
                  className="font-mono text-[10px] px-2 py-0.5 border border-gray-700 text-gray-500 hover:border-cyber-cyan hover:text-cyber-cyan rounded transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={bodyRef}
            className="terminal-body overflow-y-auto max-h-80 space-y-0.5"
          >
            {history.map((line, i) => (
              <div key={i}>
                {line.type === 'command' && (
                  <p>
                    <span className="terminal-prompt">nilesh@portfolio:~$ </span>
                    <span className="terminal-command">{line.text}</span>
                  </p>
                )}
                {line.type === 'output' && (
                  <p className="terminal-output ml-4">{line.text}</p>
                )}
                {line.type === 'system' && (
                  <p className="text-purple-400 text-xs">{line.text}</p>
                )}
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="terminal-prompt mr-2 flex-shrink-0">nilesh@portfolio:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-command bg-transparent outline-none flex-1 caret-cyber-cyan"
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal input"
                placeholder="type a command..."
              />
            </form>
          </div>
        </motion.div>

        {/* Quick-launch buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {COMMANDS.filter(c => c !== 'clear' && c !== 'help').map(cmd => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd)
                setTimeout(() => {
                  const form = document.querySelector('#terminal form')
                  if (form) form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
                }, 50)
              }}
              className="font-mono text-xs px-4 py-2 border border-gray-700 text-gray-400 hover:border-cyber-cyan hover:text-cyber-cyan rounded transition-all duration-200"
            >
              ~$ {cmd}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
