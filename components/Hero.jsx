'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ROLES = ['Data Analyst', 'Analytics Engineer', 'BI Developer', 'Responsible AI Researcher', 'AI-Assisted Builder']
const STATS = [
  { num: '4+', label: 'Years Experience' },
  { num: '5M+', label: 'Records Analyzed Daily' },
  { num: '90%+', label: 'Reporting Errors Reduced' },
  { num: '4', label: 'Cloud Certifications' },
]

function Typewriter() {
  const [text, setText] = useState('')
  useEffect(() => {
    let ri = 0, ci = 0, del = false, t
    const tick = () => {
      const w = ROLES[ri]
      if (!del) {
        ci++; setText(w.slice(0, ci))
        if (ci === w.length) { del = true; t = setTimeout(tick, 1900); return }
      } else {
        ci--; setText(w.slice(0, ci))
        if (ci === 0) { del = false; ri = (ri + 1) % ROLES.length }
      }
      t = setTimeout(tick, del ? 55 : 90)
    }
    t = setTimeout(tick, 300)
    return () => clearTimeout(t)
  }, [])
  return (
    <span className="font-disp font-medium text-ink text-lg md:text-[22px]">
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1.1, repeat: Infinity }}
        className="inline-block w-[2.5px] h-[1.05em] bg-indigo align-[-0.15em] ml-0.5"
      />
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-12 pt-28 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute -top-56 -right-44 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.14),transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-64 -left-40 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,.10),transparent_65%)]" />

      <div className="relative max-w-[1060px] mx-auto w-full">
        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="font-mono text-[12.5px] text-soft mb-4 flex items-center gap-2">
          <span className="inline-block w-6 h-[1.5px] bg-grad" /> 
        </motion.p>

        <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="font-disp font-bold text-ink text-5xl md:text-7xl leading-[1.03] tracking-tight mb-5">
          Vamshi Krishna<br /><span className="text-grad">Balupari</span>
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2} className="mb-5 min-h-[32px]">
          <Typewriter />
        </motion.div>

        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="text-base max-w-[660px] mb-8">
          Data Analyst with <strong className="text-ink font-semibold">4+ years of experience</strong> building Power BI
          executive dashboards, KPI reporting, and self-service BI on enterprise-scale data. I analyze{' '}
          <strong className="text-ink font-semibold">5M+ records daily</strong>, research{' '}
          <strong className="text-ink font-semibold">Explainable AI</strong> (SHAP &amp; Anchor), and build real products
          with <strong className="text-ink font-semibold">AI-assisted workflows</strong> — most recently an inventory
          analytics platform helping a local business make smarter purchasing decisions.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="flex flex-wrap gap-3.5 mb-8">
          <a href="#deepdives"
            className="font-disp font-semibold text-sm text-white px-7 py-3 rounded-xl bg-grad shadow-[0_8px_24px_-8px_rgba(79,70,229,.5)] hover:-translate-y-0.5 transition-transform">
            Explore My Work →
          </a>
          <a href="#contact"
            className="font-disp font-semibold text-sm text-ink px-7 py-3 rounded-xl bg-white border-[1.5px] border-line hover:border-indigo hover:text-indigo hover:-translate-y-0.5 transition-all">
            Get In Touch
          </a>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="flex gap-3">
          {[
            { href: 'https://www.linkedin.com/in/vamshikrishnabalupari/', label: 'in' },
            { href: 'https://github.com/vamshikrishna', label: 'gh' },
            { href: 'mailto:vamshikrishnabalupari@gmail.com', label: '@' },
          ].map((s) => (
            <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener"
              className="w-[42px] h-[42px] rounded-xl border-[1.5px] border-line bg-white flex items-center justify-center font-mono text-sm text-soft hover:border-indigo hover:text-indigo hover:-translate-y-0.5 transition-all">
              {s.label}
            </a>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 max-w-[760px]">
          {STATS.map((st, i) => (
            <motion.div key={st.label} variants={fadeUp} initial="hidden" animate="show" custom={6 + i}
              whileHover={{ y: -3 }}
              className="bg-white border border-line rounded-2xl px-5 py-4">
              <div className="font-disp font-bold text-[26px] text-grad">{st.num}</div>
              <div className="text-[11.5px] text-soft mt-0.5">{st.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
