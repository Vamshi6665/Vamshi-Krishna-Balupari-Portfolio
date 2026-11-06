'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { PROFILE, HERO } from '../data/content'
import { useLens, lensLabel } from './lens'
import { GitHubIcon, LinkedInIcon, MailIcon } from './ui'

const swap = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
}

export default function Hero() {
  const { lens } = useLens()
  const h = HERO[lens]

  return (
    <section id="home" aria-labelledby="hero-name" className="relative pt-[148px] md:pt-[176px] pb-16 md:pb-24 border-b border-rule overflow-hidden">
      {/* Faint measurement grid, the one decorative layer on the page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[.55] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #EEF1F5 1px, transparent 1px), linear-gradient(to bottom, #EEF1F5 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-page mx-auto px-5 md:px-8 grid lg:grid-cols-[1.2fr_.8fr] gap-12 lg:gap-16 items-start">
        <div>
          <h1 id="hero-name" className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] text-slate mb-6">
            <span className="font-semibold text-ink">{PROFILE.name}</span>
            <span className="inline-flex items-center gap-1.5 text-[13px] text-slate bg-white border border-rule rounded-full px-2.5 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Open to data roles
            </span>
          </h1>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={lens} {...swap}>
              <p className="font-disp font-bold text-ink text-[44px] leading-[1.02] sm:text-[60px] md:text-[72px] tracking-[-0.025em]">
                {h.title}
              </p>
              <p className="mt-6 text-[17px] md:text-[18.5px] leading-relaxed max-w-[600px]">{h.body}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            <a href="#work" className="inline-flex items-center font-medium text-[15px] text-white bg-ink hover:bg-[color:var(--lens)] px-4 sm:px-5 py-3 rounded-[10px] transition-colors">
              See the work
            </a>
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 font-medium text-[15px] text-ink bg-white border border-rule hover:border-ink px-4 sm:px-5 py-3 rounded-[10px] transition-colors">
              <MailIcon className="w-4 h-4" /> Email me
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="w-11 h-11 rounded-[10px] border border-rule bg-white flex items-center justify-center text-ink hover:border-ink transition-colors">
              <LinkedInIcon className="w-[17px] h-[17px]" />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="w-11 h-11 rounded-[10px] border border-rule bg-white flex items-center justify-center text-ink hover:border-ink transition-colors">
              <GitHubIcon className="w-[17px] h-[17px]" />
            </a>
          </div>
        </div>

        {/* Proof panel: every number links to the project that backs it. */}
        <aside aria-label={`Proof for ${lensLabel(lens)}`} className="relative bg-white border border-rule rounded-[16px] overflow-hidden">
          <div className="h-1 lens-bg" aria-hidden="true" />
          <p className="px-6 pt-5 pb-1 text-[13.5px] text-fog">
            Proof, <span className="lens-text font-medium">{lens === 'all' ? 'across my work' : lensLabel(lens)}</span>
          </p>
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul key={lens} {...swap} className="divide-y divide-rule">
              {h.proof.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="group flex items-baseline gap-4 px-6 py-4 hover:bg-mist transition-colors">
                    <span className="font-disp font-bold text-[34px] leading-none tracking-[-0.02em] lens-text min-w-[104px]">{p.value}</span>
                    <span className="text-[14.5px] leading-snug text-slate group-hover:text-ink">{p.label}</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </aside>
      </div>
    </section>
  )
}
