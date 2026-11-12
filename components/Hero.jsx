'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { PROFILE, HERO, NOW, STACK, CREDENTIALS } from '../data/content'
import { useLens, lensLabel } from './lens'
import { Tile, Eyebrow, LinkedInIcon, ArrowIcon, FlipIcon } from './ui'

const swap = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
}

function KpiTile({ p }) {
  return (
    <a href={p.href} className="flip block h-full rounded-tile" aria-label={`${p.value} ${p.label}. Source: ${p.from}. Open the case study.`}>
      <div className="flip-inner">
        <div className="flip-face bg-white p-[22px] flex flex-col justify-between gap-4">
          <span className="flip-hint inline-flex items-center gap-1.5 font-mono text-[11.5px] text-fog">
            <FlipIcon className="w-3.5 h-3.5" /> hover for the source
          </span>
          <div>
            <p className="font-disp font-bold text-[40px] sm:text-[48px] leading-none tracking-[-0.03em] lens-text">{p.value}</p>
            <p className="mt-2 text-[14px] leading-snug text-[#3A414D]">{p.label}</p>
            <p className="flip-src mt-2 font-mono text-[11.5px] leading-snug text-fog">Source: {p.from}</p>
          </div>
        </div>
        <div className="flip-face flip-back lens-bg text-white p-[22px] flex flex-col justify-between gap-4" aria-hidden="true">
          <span className="font-mono text-[11.5px] text-white/90">where this number comes from</span>
          <div>
            <p className="font-disp font-semibold text-[19px] sm:text-[21px] leading-tight">{p.from}</p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-medium">Open the case study <ArrowIcon className="w-4 h-4" /></p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default function Hero() {
  const { lens } = useLens()
  const h = HERO[lens]

  return (
    <section id="home" aria-labelledby="hero-name" className="max-w-page mx-auto px-4 md:px-8 pt-2 md:pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {/* Intro */}
        <Tile className="sm:col-span-2 lg:row-span-2 bg-night p-7 md:p-9 flex flex-col justify-between gap-8 text-[#C5CBD6]">
          <div>
            <h1 id="hero-name" className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-mono text-[12.5px] lens-text-dark">{PROFILE.name}</span>
              <span className="inline-flex items-center gap-1.5 text-[12px] text-white bg-white/10 rounded-full px-2.5 py-1">
                <span className="live-dot w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Open to data roles
              </span>
            </h1>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={lens} {...swap}>
                <p className="mt-5 font-disp font-bold text-white text-[38px] sm:text-[46px] xl:text-[52px] leading-[1.04] tracking-[-0.03em]">{h.title}</p>
                <p className="mt-5 text-[16px] md:text-[16.5px] leading-relaxed max-w-[520px]">{h.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <a href="#work" className="inline-flex items-center gap-2 min-h-[46px] px-5 rounded-xl bg-white text-ink font-semibold text-[15px] hover:bg-[color:var(--lens-dark)] transition-colors">
              See the work <ArrowIcon className="w-4 h-4" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center min-h-[46px] px-5 rounded-xl border border-white/20 text-white font-medium text-[15px] hover:border-white/60 transition-colors">
              Email me
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="w-[46px] h-[46px] rounded-xl border border-white/20 flex items-center justify-center text-white hover:border-white/60 transition-colors">
              <LinkedInIcon className="w-[17px] h-[17px]" />
            </a>
          </div>
        </Tile>

        {/* Headline numbers: flip for the source */}
        <Tile delay={0.05} className="sm:col-span-2 lg:row-span-2">
          <h2 className="sr-only">Proof, {lens === 'all' ? 'across my work' : `for ${lensLabel(lens)} roles`}</h2>
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul key={lens} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.12 } }} transition={{ duration: 0.3 }} className="grid grid-cols-2 gap-3.5 h-full">
              {h.proof.map((p) => (
                <li key={p.label} className="min-h-[196px]"><KpiTile p={p} /></li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </Tile>

        {/* Now */}
        <Tile delay={0.1} className="bg-white p-[22px] flex flex-col justify-between gap-6 min-h-[180px]">
          <span className="inline-flex items-center gap-2 font-mono text-[12px] text-de">
            <span className="live-dot w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" /> now
          </span>
          <div>
            <p className="font-disp font-semibold text-[19px] leading-tight text-ink">{NOW.role} at {NOW.org}</p>
            <p className="mt-1.5 text-[13.5px] text-fog">{NOW.place} · since {NOW.since}</p>
          </div>
        </Tile>

        {/* Education */}
        <Tile delay={0.15} className="bg-white p-[22px] flex flex-col justify-between gap-6 min-h-[180px]">
          <Eyebrow>education</Eyebrow>
          <div>
            <p className="font-disp font-bold text-[44px] leading-none tracking-[-0.03em] text-ink">
              4.0 <span className="text-[16px] font-medium tracking-normal text-fog">GPA</span>
            </p>
            <p className="mt-2 text-[14px] leading-snug text-[#3A414D]">{CREDENTIALS.degree.name}, {CREDENTIALS.degree.school}</p>
          </div>
        </Tile>

        {/* Stack ticker + certifications */}
        <Tile delay={0.2} className="sm:col-span-2 bg-white py-[22px] overflow-hidden flex flex-col justify-between gap-5">
          <Eyebrow className="text-fog px-[22px]">the stack I ship with</Eyebrow>
          <div className="ticker-wrap overflow-hidden">
            <div className="ticker">
              <ul aria-label="Tools" className="contents">
                {STACK.map((s) => (
                  <li key={s} className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-chip text-[14.5px] font-medium text-ink">{s}</li>
                ))}
              </ul>
              {STACK.map((s) => (
                <span key={`dupe-${s}`} data-dupe aria-hidden="true" className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-chip text-[14.5px] font-medium text-ink">{s}</span>
              ))}
            </div>
          </div>
          <ul aria-label="Certifications" className="px-[22px] flex flex-wrap items-center gap-2">
            {CREDENTIALS.certs.map((c) => (
              <li key={c.code} title={`${c.org} ${c.name}`} className="px-2.5 py-1.5 rounded-lg border border-line font-mono text-[12px] text-ink">
                {c.org === 'AWS' ? `AWS ${c.code}` : c.code}
              </li>
            ))}
            <li className="px-1 text-[13px] text-fog">{CREDENTIALS.certs.length} cloud certifications</li>
          </ul>
        </Tile>
      </div>
    </section>
  )
}
