/**
 * LoadingScreen.jsx — Animated cyber boot sequence shown on first load.
 */
import { motion } from 'framer-motion'

const lines = [
  '> Initialising security environment...',
  '> Loading threat intelligence modules...',
  '> Authenticating user profile...',
  '> Decrypting portfolio data...',
  '> All systems nominal.',
]

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* Cyber logo */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="w-20 h-20 border-2 border-cyber-cyan flex items-center justify-center relative"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
          <span className="font-display font-bold text-2xl text-cyber-cyan">NP</span>
        </div>
        {/* Rotating ring */}
        <motion.div
          className="absolute inset-[-8px] border border-cyber-cyan opacity-30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[-16px] border border-purple-500 opacity-20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Name */}
      <motion.p
        className="font-display text-cyber-cyan text-lg tracking-widest mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        NILESH PEIRIS
      </motion.p>

      {/* Terminal boot lines */}
      <div className="terminal-window w-full max-w-sm mx-4">
        <div className="terminal-header">
          <span className="terminal-dot bg-red-500" />
          <span className="terminal-dot bg-yellow-500" />
          <span className="terminal-dot bg-green-500" />
          <span className="ml-2 text-xs text-gray-500 font-mono">boot.sh</span>
        </div>
        <div className="terminal-body p-4 text-xs space-y-1">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              className="terminal-output"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.28 }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <motion.div className="w-64 h-[2px] bg-gray-800 mt-6 rounded overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyber-cyan via-purple-500 to-pink-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}
