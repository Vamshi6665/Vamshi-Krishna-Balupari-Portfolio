'use client'
// Full project (or client) detail in a dialog: links, screenshots, numbers, how it works, decisions, outcome.
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { BrowserFrame, Button, Icon, PhoneFrame, Rich } from './ui'
import { CASE_STUDIES } from '../data/content'

export function resolveDetail(item) {
  const cs = CASE_STUDIES.find((c) => c.id === item.caseId) || {}
  const d = item.detail || {}
  // A project with its own write-up replaces the older case study instead of mixing with it.
  const own = Boolean(d.overview)
  return {
    hook: d.hook || cs.hook,
    metrics: d.metrics || cs.metrics || [],
    overview: d.overview || cs.overview || [],
    workflow: d.workflow || cs.workflow || [],
    decisions: d.decisions || cs.decisions || [],
    outcome: d.outcome || cs.outcome,
    shots: d.shots || cs.shots || [],
    shotsNote: d.shotsNote || cs.shotsNote,
    pipeline: d.pipeline || (own ? null : cs.pipeline),
    deNotes: d.deNotes || (own ? null : cs.deNotes),
    studies: own ? null : cs.studies,
    privateNote: cs.privateNote,
    role: item.role || cs.role,
    stackList: item.stack || (cs.stack ? cs.stack.split(', ') : []),
    paper: d.paper,
    extraLinks: d.extraLinks || [],
  }
}

export function LiveButton({ live, size = 'md' }) {
  if (!live) return null
  return (
    <Button href={live.href} variant="grad" size={size} icon={live.host === 'Vercel' ? 'vercel' : 'globe'} iconRight="external">
      {live.host === 'Vercel' ? 'Live on Vercel' : 'Live demo'}
    </Button>
  )
}

function Gallery({ shots, label, note }) {
  const [i, setI] = useState(0)
  if (!shots.length) return null
  const s = shots[i]
  return (
    <div>
      <div className="rounded-2xl bg-shade/25 border border-tint/[0.06] p-3 md:p-5 grid place-items-center min-h-[240px]">
        {s.mobile ? (
          <PhoneFrame className="w-[min(260px,62vw)]">
            <img src={s.src} width={s.w} height={s.h} alt={s.caption} className="block w-full h-auto" />
          </PhoneFrame>
        ) : (
          <BrowserFrame label={label} className="w-full">
            <img src={s.src} width={s.w} height={s.h} alt={s.caption} className="block w-full h-auto" />
          </BrowserFrame>
        )}
        <p className="mt-3 text-[13.5px] text-muted text-center">{s.caption}</p>
      </div>
      {shots.length > 1 && (
        <ul className="mt-3 flex gap-2 overflow-x-auto no-scrollbar pb-1" aria-label="Screenshots">
          {shots.map((t, k) => (
            <li key={t.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setI(k)}
                aria-label={`Show screenshot ${k + 1}: ${t.caption}`}
                aria-pressed={k === i}
                className={`block h-16 ${t.mobile ? 'w-9' : 'w-24'} rounded-lg overflow-hidden border transition ${k === i ? 'border-accent' : 'border-tint/10 opacity-60 hover:opacity-100'}`}
              >
                <img src={t.src} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {note && <p className="mt-2 text-[12.5px] text-muted">{note}</p>}
    </div>
  )
}

function Block({ title, children }) {
  return (
    <section className="mt-10">
      <h3 className="font-disp font-semibold text-[18px] md:text-[20px] mb-4">{title}</h3>
      {children}
    </section>
  )
}

export default function DetailModal({ item, onClose }) {
  const closeRef = useRef(null)
  const d = resolveDetail(item)
  useEffect(() => {
    const prev = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      prev?.focus?.()
    }
  }, [onClose])

  const frameLabel = item.cover?.label || item.title
  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="fixed inset-0 bg-[rgb(var(--bg)/.82)] backdrop-blur-md" onClick={onClose} aria-hidden="true" />
      <motion.article
        initial={{ opacity: 0, y: 28, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
        className="relative mx-auto my-6 md:my-12 w-[min(1060px,calc(100%-24px))] rounded-[28px] bg-deep/95 border border-tint/10 shadow-[0_60px_120px_-40px_rgb(0_0_0/.9)]"
      >
        <div className="sticky top-0 z-10 flex justify-end p-3 md:p-4">
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close details" className="grid place-items-center w-10 h-10 rounded-full glass hover:bg-tint/10">
            <Icon name="close" className="w-5 h-5" />
          </button>
        </div>
        <div className="px-5 md:px-12 pb-12 -mt-10">
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-muted">
            {item.year && <span className="px-2.5 py-1 rounded-full bg-tint/[0.06]">{item.year}</span>}
            {item.status && <span className="px-2.5 py-1 rounded-full bg-g3/15 text-ink">{item.status}</span>}
            {d.role && <span>{d.role}</span>}
          </div>
          <h2 id="detail-title" className="mt-4 font-disp font-semibold text-[30px] md:text-[44px] leading-[1.05] tracking-[-0.025em] max-w-[22ch]">{item.title}</h2>
          {d.hook && <p className="mt-4 text-[17px] md:text-[18px] text-ink/85 leading-relaxed max-w-[70ch]"><Rich text={d.hook} /></p>}

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {item.github && <Button href={item.github} icon="github" iconRight="external">View on GitHub</Button>}
            <LiveButton live={item.live} />
            {d.extraLinks.map((l) => <Button key={l.href} href={l.href} variant="ghost" icon="github" size="sm">{l.label}</Button>)}
          </div>
          {item.live?.note && <p className="mt-3 text-[13px] text-muted flex items-center gap-1.5"><Icon name={item.live.note.startsWith('Sign') ? 'lock' : 'clock'} className="w-3.5 h-3.5" />{item.live.note}</p>}
          {d.privateNote && <p className="mt-3 text-[13.5px] text-muted flex items-center gap-1.5"><Icon name="lock" className="w-3.5 h-3.5" />{d.privateNote}</p>}

          {d.metrics.length > 0 && (
            <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
              {d.metrics.map((m) => (
                <div key={m.label} className="glass rounded-2xl p-4">
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-disp font-semibold text-[24px] md:text-[28px] leading-none grad-text inline-block">{m.value}</dd>
                  <dd className="mt-2 text-[13px] text-muted leading-snug">{m.label}</dd>
                </div>
              ))}
            </dl>
          )}

          {d.shots.length > 0 && <div className="mt-10"><Gallery shots={d.shots} label={frameLabel} note={d.shotsNote} /></div>}

          <div className="grid lg:grid-cols-[1fr_280px] gap-10">
            <div>
              {d.overview.length > 0 && (
                <Block title="Why I built it">
                  <div className="space-y-4 text-[16px] leading-[1.75] text-ink/85">
                    {d.overview.map((p, k) => <p key={k}><Rich text={p} /></p>)}
                  </div>
                </Block>
              )}
            </div>
            {d.stackList.length > 0 && (
              <Block title="Built with">
                <ul className="flex flex-wrap gap-1.5">
                  {d.stackList.map((s) => <li key={s} className="px-2.5 py-1 rounded-lg bg-tint/[0.06] text-[13px]">{s}</li>)}
                </ul>
              </Block>
            )}
          </div>

          {d.pipeline && (
            <Block title="Data flow">
              <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {d.pipeline.map((p, k) => (
                  <li key={p.tool} className="relative glass rounded-2xl p-4 pl-12">
                    <span className="absolute left-4 top-4 grid place-items-center w-6 h-6 rounded-full grad-bg text-[12px] font-semibold">{k + 1}</span>
                    <p className="font-semibold text-[15px]">{p.tool}</p>
                    <p className="text-[13.5px] text-muted mt-0.5">{p.note}</p>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {d.workflow.length > 0 && (
            <Block title="How it works">
              <ol className="grid md:grid-cols-2 gap-3">
                {d.workflow.map((w, k) => (
                  <li key={w.step} className="glass rounded-2xl p-5">
                    <p className="text-[13px] text-accent">Step {k + 1}</p>
                    <p className="mt-1 font-semibold text-[16px]">{w.step}</p>
                    <p className="mt-1.5 text-[14.5px] text-ink/80 leading-relaxed"><Rich text={w.text} /></p>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {d.studies && (
            <Block title="The five studies">
              <ul className="divide-y divide-tint/[0.07] rounded-2xl glass">
                {d.studies.map((s) => (
                  <li key={s.name} className="p-4 md:px-5 grid md:grid-cols-[1.1fr_1.2fr_1fr] gap-1 md:gap-5">
                    <p className="font-semibold text-[15px]">{s.name}</p>
                    <p className="text-[14px] text-muted">{s.shows}</p>
                    <p className="text-[14px] text-ink/90">{s.result}</p>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {d.deNotes && (
            <Block title="Engineering notes">
              <ul className="space-y-2.5 text-[15px] text-ink/85 leading-relaxed list-disc pl-5 marker:text-accent">
                {d.deNotes.map((n) => <li key={n}><Rich text={n} /></li>)}
              </ul>
            </Block>
          )}

          {d.decisions.length > 0 && (
            <Block title="Key decisions">
              <ul className="grid md:grid-cols-3 gap-3">
                {d.decisions.map((x) => (
                  <li key={x.title} className="rounded-2xl p-5 bg-tint/[0.035] border border-tint/[0.07]">
                    <p className="font-semibold text-[15.5px]">{x.title}</p>
                    <p className="mt-2 text-[14px] text-ink/80 leading-relaxed">{x.why}</p>
                    <p className="mt-3 text-[13px] text-muted leading-relaxed"><span className="text-ink/70">Trade-off:</span> {x.tradeoff}</p>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {(d.outcome || d.paper) && (
            <Block title="Where it stands">
              {d.outcome && <p className="text-[16px] text-ink/85 leading-relaxed max-w-[70ch]">{d.outcome}</p>}
              {d.paper && (
                <p className="mt-4 flex gap-2.5 text-[14.5px] text-muted leading-relaxed max-w-[75ch]">
                  <Icon name="doc" className="w-4 h-4 mt-1 shrink-0 text-accent" />
                  <span>Paper: {d.paper}</span>
                </p>
              )}
            </Block>
          )}
        </div>
      </motion.article>
    </motion.div>,
    document.body,
  )
}
