/**
 * ParticleCanvas.jsx — Floating particle system rendered on an HTML5 canvas.
 */
import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~'
    const fontSize = 14
    const columns = Math.floor(W / fontSize)
    
    // Array of drops - one per column
    const drops = Array.from({ length: columns }, () => Math.random() * -100)

    let animId
    const draw = () => {
      // Create translucent background to show trailing effect
      ctx.fillStyle = 'rgba(10, 10, 12, 0.05)'
      ctx.fillRect(0, 0, W, H)

      ctx.fillStyle = 'rgba(0, 212, 255, 0.7)' // Cyber cyan color
      ctx.font = `${fontSize}px Orbitron, monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charset[Math.floor(Math.random() * charset.length)]
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Reset drop to top randomly when it hits the bottom
        if (drops[i] * fontSize > H && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Increment Y coordinate
        drops[i]++
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
      
      // Re-initialize drops if window gets larger
      const newColumns = Math.floor(W / fontSize)
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops.push(Math.random() * -100)
        }
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      className="absolute inset-0 pointer-events-none opacity-40 z-0"
      aria-hidden="true"
    />
  )
}
