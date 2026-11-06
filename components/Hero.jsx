'use client'
import { motion } from 'framer-motion'
import { PROFILE, HERO } from '../data/content'
import { Rich, GitHubIcon, LinkedInIcon, MailIcon } from './ui'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' } }),
}

const SOCIALS = [
  { href: PROFILE.linkedin, label: 'LinkedIn', Icon: LinkedInIcon, external: true },
  { href: PROFILE.github, label: 'GitHub', Icon: GitHubIcon, external: true },
  { href: `mailto:${PROFILE.email}`, label: 'Email', Icon: MailIcon, external: false },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 md:px-8 pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute -top-56 -right-44 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,.14),transparent_65%)]" />
      <div className="pointer-events-none absolute top-1/3 -left-60 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,.10),transparent_65%)]" />

      <div className="relative max-w-[1120px] mx-auto">
        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="inline-flex items-center gap-2.5 text-[13px] font-medium text-body bg-white border border-line rounded-full pl-3 pr-4 py-1.5 mb-7"
        >
          <span className="relative flex w-2 h-2" aria-hidden="true">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          <span className="sm:hidden">{HERO.availabilityShort}</span>
          <span className="hidden sm:inline">{HERO.availability}</span>
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="font-disp font-bold text-ink text-[42px] leading-[1.04] sm:text-6xl md:text-[76px] tracking-tight mb-4"
        >
          Vamshi Krishna <span className="text-grad">Balupari</span>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="font-disp font-medium text-ink text-[19px] md:text-[23px] mb-5"
        >
          {PROFILE.role}
        </motion.p>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="text-[16px] md:text-[17px] leading-relaxed max-w-[640px] mb-8"
        >
          <Rich text={HERO.summary} />
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href="#work"
            className="font-disp font-semibold text-[15px] text-white px-6 py-3 rounded-xl bg-grad shadow-[0_8px_24px_-8px_rgba(79,70,229,.5)] hover:-translate-y-0.5 transition-transform"
          >
            View case studies
          </a>
          <a
            href="#contact"
            className="font-disp font-semibold text-[15px] text-ink px-6 py-3 rounded-xl bg-white border-[1.5px] border-line hover:border-indigo hover:text-indigo hover:-translate-y-0.5 transition-all"
          >
            Contact me
          </a>
          <div className="flex gap-2 sm:ml-2">
            {SOCIALS.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={external ? `${label} (opens in a new tab)` : label}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="w-11 h-11 rounded-xl border-[1.5px] border-line bg-white flex items-center justify-center text-soft hover:border-indigo hover:text-indigo hover:-translate-y-0.5 transition-all"
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        </motion.div>

        <dl className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-[860px]">
          {HERO.stats.map((st, i) => (
            <motion.div
              key={st.label}
              variants={fadeUp} initial="hidden" animate="show" custom={5 + i}
              className="flex flex-col-reverse justify-end gap-2 bg-white border border-line rounded-2xl px-4 py-4 md:px-5"
            >
              <dt className="text-[12.5px] leading-snug text-soft">{st.label}</dt>
              <dd className="font-disp font-bold text-[28px] leading-none text-grad">{st.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
