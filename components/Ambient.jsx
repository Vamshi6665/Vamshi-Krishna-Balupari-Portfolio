'use client'
// The ambient layer behind every section: three slow gradient blobs, a soft glow that follows the cursor, and film grain.
// Plus <Particles />, the node-and-line network used in the hero and contact bands (after the reference portfolio).
import { useEffect, useRef } from 'react'

export function Mesh() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${e.clientX}px`)
        el.style.setProperty('--my', `${e.clientY}px`)
      })
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => {
      window.removeEventListener('pointermove', move)
      cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <>
      <div ref={ref} className="mesh" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="cursor" />
        <div className="veil" />
      </div>
      <div className="grain" aria-hidden="true" />
    </>
  )
}

function readRGB(name) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim().split(/\s+/).map(Number)
  return v.length === 3 && v.every((n) => !Number.isNaN(n)) ? v : [180, 160, 255]
}

// A connected-node field. Nodes drift, link to neighbours, and lean toward the pointer.
// Pauses when off screen; draws a single still frame for reduced-motion visitors.
export function Particles({ className = '', density = 13000, max = 90 }) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, dpr = 1, nodes = [], raf = 0, running = false
    let colors = [readRGB('--g1'), readRGB('--g2'), readRGB('--g3')]
    const mouse = { x: -9999, y: -9999 }

    const seed = () => {
      const r = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width; h = r.height
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(max, Math.round((w * h) / density))
      nodes = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: 1.2 + Math.random() * 2.2, c: i % 3,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const link = Math.min(170, Math.max(110, w / 9))
      for (const p of nodes) {
        if (!reduce) {
          const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy)
          if (d < 180) { p.vx += (dx / d) * 0.012; p.vy += (dy / d) * 0.012 }
          p.vx *= 0.995; p.vy *= 0.995
          p.x += p.vx; p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < link) {
            const [r, g, bl] = colors[a.c]
            ctx.strokeStyle = `rgba(${r},${g},${bl},${(1 - d / link) * 0.35})`
            ctx.lineWidth = 0.8
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        const md = Math.hypot(mouse.x - a.x, mouse.y - a.y)
        if (md < 200) {
          ctx.strokeStyle = `rgba(255,255,255,${(1 - md / 200) * 0.25})`
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke()
        }
      }
      for (const p of nodes) {
        const [r, g, b] = colors[p.c]
        ctx.fillStyle = `rgba(${r},${g},${b},0.9)`
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill()
      }
    }

    const loop = () => { draw(); if (running) raf = requestAnimationFrame(loop) }
    const start = () => { if (reduce) { draw(); return } if (!running) { running = true; loop() } }
    const stop = () => { running = false; cancelAnimationFrame(raf) }

    seed(); start()
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0 })
    io.observe(canvas)
    const onResize = () => { seed(); if (reduce) draw() }
    const onMove = (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    const parent = canvas.parentElement
    window.addEventListener('resize', onResize)
    parent.addEventListener('pointermove', onMove, { passive: true })
    parent.addEventListener('pointerleave', onLeave)
    const mo = new MutationObserver(() => { colors = [readRGB('--g1'), readRGB('--g2'), readRGB('--g3')]; if (reduce) draw() })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-palette'] })
    return () => {
      stop(); io.disconnect(); mo.disconnect()
      window.removeEventListener('resize', onResize)
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerleave', onLeave)
    }
  }, [density, max])
  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} aria-hidden="true" />
}
