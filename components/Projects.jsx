'use client'
// The project grid: a preview for every project, a hover mask (after the reference portfolio),
// and two buttons on each card, GitHub and the live app. Clicking the preview opens the full detail.
import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserFrame, Button, Icon, SectionTitle } from './ui'
import CoverArt from './Covers'
import DetailModal, { LiveButton } from './DetailModal'
import { FILTERS, PROJECTS } from '../data/projects'

function Cover({ p }) {
  const c = p.cover
  if (c.art) return <CoverArt art={c.art} />
  if (c.frame === 'inset') {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_10%_0%,rgb(var(--g3)/.28),transparent_60%),radial-gradient(80%_80%_at_100%_100%,rgb(var(--g1)/.3),transparent_60%)] bg-deep">
        <img src={c.src} alt="" loading="lazy" className="cover-img absolute left-[9%] right-[9%] top-[9%] w-[82%] aspect-[3/2] object-cover rounded-xl border border-white/10 shadow-[0_30px_60px_-25px_rgb(0_0_0/.85)]" />
      </div>
    )
  }
  if (c.frame === 'paper') {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_20%_10%,rgb(var(--g1)/.35),transparent_60%),radial-gradient(80%_80%_at_100%_100%,rgb(var(--g2)/.25),transparent_60%)] bg-deep">
        <img
          src={c.src}
          alt=""
          loading="lazy"
          className="cover-img absolute left-1/2 top-[9%] w-[78%] -translate-x-1/2 -rotate-[3deg] rounded-md shadow-[0_30px_60px_-20px_rgb(0_0_0/.85)]"
        />
      </div>
    )
  }
  return (
    <div className="absolute inset-0 bg-[radial-gradient(90%_90%_at_10%_0%,rgb(var(--g1)/.35),transparent_60%),radial-gradient(80%_80%_at_100%_100%,rgb(var(--g2)/.28),transparent_60%)] bg-deep">
      <BrowserFrame label={c.label} className="cover-img absolute left-[7%] right-[7%] top-[9%]">
        <img src={c.src} alt="" loading="lazy" className="block w-full aspect-[16/10] object-cover object-top" />
      </BrowserFrame>
    </div>
  )
}

function ProjectCard({ p, onOpen }) {
  const extra = p.stack.length - 4
  return (
    <article className="card group relative h-full flex flex-col rounded-[24px] glass grad-border overflow-hidden">
      <button
        type="button"
        onClick={() => onOpen(p)}
        className="relative block aspect-[16/11] overflow-hidden text-left"
        aria-label={`Open details for ${p.title}`}
      >
        <Cover p={p} />
        <span className="mask absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg)/.95)] via-[rgb(var(--bg)/.55)] to-transparent flex items-end p-5">
          <span className="inline-flex items-center gap-2 text-[14px] font-medium">
            <span className="grid place-items-center w-7 h-7 rounded-full grad-bg"><Icon name="doc" className="w-3.5 h-3.5" /></span>
            Open the full project
          </span>
        </span>
        {p.live && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full bg-black/55 backdrop-blur text-[11.5px] text-white">
            <span className="w-1.5 h-1.5 rounded-full bg-live" /> Live
          </span>
        )}
        {p.status && (
          <span className="absolute top-3 right-3 inline-flex items-center h-6 px-2.5 rounded-full bg-black/55 backdrop-blur text-[11.5px] text-white">{p.status}</span>
        )}
      </button>
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-disp font-semibold text-[18px] leading-snug tracking-[-0.01em]">{p.title}</h3>
          <span className="shrink-0 text-[12.5px] text-muted">{p.year}</span>
        </div>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink/75">{p.line}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Built with">
          {p.stack.slice(0, 4).map((s) => <li key={s} className="px-2 py-0.5 rounded-md bg-white/[0.06] text-[12px] text-ink/80">{s}</li>)}
          {extra > 0 && <li className="px-2 py-0.5 rounded-md text-[12px] text-muted">+{extra} more</li>}
        </ul>
        <div className="mt-auto pt-5 flex flex-wrap items-center gap-2">
          {p.github && <Button href={p.github} size="sm" icon="github" aria-label={`${p.title} on GitHub`}>GitHub</Button>}
          {p.live ? (
            <LiveButton live={p.live} size="sm" />
          ) : (
            <Button size="sm" variant="ghost" onClick={() => onOpen(p)}>Read the case study</Button>
          )}
        </div>
        {p.live?.note && (
          <p className="mt-2.5 text-[12px] text-muted flex items-center gap-1.5">
            <Icon name={p.live.note.startsWith('Sign') ? 'lock' : 'clock'} className="w-3 h-3" /> {p.live.note}
          </p>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  const list = useMemo(() => (filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter))), [filter])
  const count = (id) => (id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.tags.includes(id)).length)

  return (
    <section id="projects" className="relative z-10 py-20 md:py-24" aria-labelledby="projects-title">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <SectionTitle
          id="projects-title"
          ghost="PROJECTS"
          title="My projects"
          sub="Every project has its code on GitHub, and the ones that are live open straight into the running app."
        />
        <div role="group" aria-label="Filter projects" className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`h-10 px-4 rounded-full text-[14px] transition inline-flex items-center gap-2 ${filter === f.id ? 'grad-bg font-medium' : 'glass text-muted hover:text-ink'}`}
            >
              {f.label}
              <span className={`text-[12px] ${filter === f.id ? 'opacity-80' : 'text-muted'}`}>{count(f.id)}</span>
            </button>
          ))}
        </div>
        <motion.ul layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence initial={false}>
            {list.map((p) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard p={p} onOpen={setOpen} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
      <AnimatePresence>{open && <DetailModal key={open.id} item={open} onClose={close} />}</AnimatePresence>
    </section>
  )
}
