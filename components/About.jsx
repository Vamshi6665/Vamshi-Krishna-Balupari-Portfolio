'use client'
// About me: three tabs (About, Skills, Education) with a sliding selector, after the reference portfolio.
import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rich, SectionTitle } from './ui'
import { ABOUT, SKILL_GROUPS } from '../data/projects'
import { CREDENTIALS } from '../data/content'

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]

function AboutTab() {
  return (
    <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-start">
      <div className="text-center lg:text-left">
        <div className="relative mx-auto lg:mx-0 w-44 h-44 rounded-full p-[3px] grad-bg">
          <img src="/images/profile.webp" width="480" height="480" alt="Vamshi Krishna Balupari" className="w-full h-full rounded-full object-cover" />
        </div>
        <dl className="mt-8 grid grid-cols-2 gap-3">
          {ABOUT.stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl px-4 py-3.5 text-left">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-disp font-semibold text-[24px] leading-none">{s.value}</dd>
              <dd className="mt-1.5 text-[12.5px] text-muted leading-snug">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <h3 className="font-disp font-semibold text-[22px] md:text-[26px] tracking-[-0.01em]">
          Vamshi Krishna Balupari
        </h3>
        <p className="mt-2 text-accent text-[15px]">AI Engineer building agents, full-stack apps, and data platforms</p>
        <div className="mt-6 space-y-4 text-[16.5px] leading-[1.75] text-ink/85 max-w-[68ch]">
          {ABOUT.bio.map((p, i) => <p key={i}><Rich text={p} /></p>)}
        </div>
        <div className="mt-8">
          <h4 className="text-[14px] font-semibold text-ink">Editors, tools, and platforms I use</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {ABOUT.tools.map((t) => (
              <li key={t} className="px-3 py-1.5 rounded-full bg-tint/[0.05] border border-tint/[0.08] text-[13.5px] text-ink/85">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function SkillsTab() {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {SKILL_GROUPS.map((g) => (
        <li key={g.name} className="glass grad-border rounded-2xl p-5">
          <h3 className="font-disp font-semibold text-[16px]">{g.name}</h3>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {g.items.map((s) => (
              <li key={s} className="px-2.5 py-1 rounded-lg bg-tint/[0.06] text-[13px] text-ink/90">{s}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

function EducationTab() {
  const d = CREDENTIALS.degree
  return (
    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
      <article className="glass grad-border rounded-3xl p-7 md:p-9">
        <p className="text-muted text-[14px]">{d.dates}</p>
        <h3 className="mt-2 font-disp font-semibold text-[22px] md:text-[26px] leading-tight">{d.name}</h3>
        <p className="mt-2 text-[16px] text-ink/85">{d.school}</p>
        <p className="mt-6 inline-flex items-baseline gap-2">
          <span className="font-disp font-bold text-[44px] leading-none grad-text">4.0</span>
          <span className="text-muted text-[14px]">GPA</span>
        </p>
        <ul className="mt-6 space-y-2 text-[15px] text-ink/85">
          <li>Research Assistant: explainable AI with SHAP and Anchor</li>
          <li>Co-authored a paper comparing LLM SDKs for a codebase agent</li>
          <li>Graduate Directed Project: EdgeCare Triage, an on-device healthcare AI app</li>
        </ul>
      </article>
      <div>
        <h3 className="font-disp font-semibold text-[17px] mb-4">Certifications</h3>
        <ul className="grid sm:grid-cols-2 gap-3">
          {CREDENTIALS.certs.map((c) => (
            <li key={c.code} className="glass rounded-2xl p-4">
              <p className="font-disp font-semibold text-[18px] grad-text inline-block">{c.code}</p>
              <p className="mt-1 text-[14px] text-ink/90 leading-snug">{c.name}</p>
              <p className="mt-1 text-[12.5px] text-muted">{c.org}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function About() {
  const [tab, setTab] = useState('about')
  const refs = useRef({})
  const idx = TABS.findIndex((t) => t.id === tab)
  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = TABS[(idx + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length].id
    setTab(next)
    refs.current[next]?.focus()
  }
  return (
    <section id="about" className="relative z-10 py-20 md:py-24" aria-labelledby="about-title">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <SectionTitle id="about-title" ghost="ABOUT ME" title="About me" sub="Who I am, what I work with, and where I studied." />
        <div role="tablist" aria-label="About sections" onKeyDown={onKey} className="relative mx-auto max-w-[560px] grid grid-cols-3 p-1.5 rounded-full glass mb-12">
          <span
            aria-hidden="true"
            className="absolute top-1.5 bottom-1.5 left-1.5 rounded-full grad-bg transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
            style={{ width: 'calc((100% - 12px) / 3)', transform: `translateX(${idx * 100}%)` }}
          />
          {TABS.map((t) => (
            <button
              key={t.id}
              ref={(el) => (refs.current[t.id] = el)}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={tab === t.id ? 0 : -1}
              onClick={() => setTab(t.id)}
              className={`relative z-10 h-10 rounded-full text-[14.5px] font-medium transition-colors ${tab === t.id ? '' : 'text-muted hover:text-ink'}`}
              style={tab === t.id ? { color: 'rgb(var(--on-grad))' } : undefined}
            >
              {t.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            role="tabpanel"
            id={`panel-${tab}`}
            aria-labelledby={`tab-${tab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            {tab === 'about' && <AboutTab />}
            {tab === 'skills' && <SkillsTab />}
            {tab === 'education' && <EducationTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
