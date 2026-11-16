'use client'
// Client work: who I built for, the shape of each pipeline, and the numbers. Each opens a full case study.
import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Button, Rich, SectionTitle } from './ui'
import DetailModal from './DetailModal'
import { ALSO_SUPPORTED, CLIENTS, PROJECTS } from '../data/projects'
import { CASE_STUDIES } from '../data/content'

function FlowDiagram({ steps }) {
  return (
    <ol className="flex flex-wrap items-center gap-y-2.5" aria-label="Pipeline">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center">
          <span className="inline-flex items-center gap-1.5 h-8 pl-1 pr-2.5 rounded-full bg-deep border border-tint/12 text-[12.5px] whitespace-nowrap shadow-[0_8px_20px_-10px_rgb(0_0_0/.8)]">
            <span className="grid place-items-center w-6 h-6 rounded-full grad-bg text-[11px] font-semibold">{i + 1}</span>
            {s}
          </span>
          {i < steps.length - 1 && <span aria-hidden="true" className="w-3 md:w-4 h-[2px] mx-1 rounded-full flow-line" />}
        </li>
      ))}
    </ol>
  )
}

export default function Clients() {
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  const openCase = (c) => {
    const cs = CASE_STUDIES.find((x) => x.id === c.caseId)
    setOpen({ id: c.id, title: cs?.title || c.name, year: c.years, caseId: c.caseId, cover: { label: c.name } })
  }
  return (
    <section id="clients" className="relative z-10 py-20 md:py-24" aria-labelledby="clients-title">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <SectionTitle
          id="clients-title"
          ghost="CLIENTS"
          title="Clients I’ve built for"
          sub="Enterprise work at DXC Technology and my current company. The code belongs to the clients, so each case study shows the architecture, my part, and the results."
        />
        <ul className="space-y-5">
          {CLIENTS.map((c) => {
            const related = (c.related || []).map((id) => PROJECTS.find((p) => p.id === id)).filter(Boolean)
            return (
              <li key={c.id}>
                <article className="glass grad-border rounded-[28px] p-6 md:p-9 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-8 lg:gap-12 items-center">
                  <div>
                    <p className="text-[13.5px] text-muted">{c.via}, {c.years}</p>
                    <h3 className="mt-2 font-disp font-bold text-[28px] md:text-[36px] leading-none tracking-[-0.025em]">{c.name}</h3>
                    <p className="mt-3 text-accent text-[15px]">{c.what}</p>
                    <p className="mt-4 text-[15.5px] text-ink/80 leading-relaxed max-w-[56ch]"><Rich text={c.summary} /></p>
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      <Button variant="grad" size="sm" icon="doc" onClick={() => openCase(c)}>Read the case study</Button>
                      {related.map((p) => (
                        <Button key={p.id} size="sm" variant="ghost" onClick={() => setOpen(p)}>{p.title}</Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <FlowDiagram steps={c.flow} />
                    <dl className="mt-7 grid grid-cols-3 gap-3">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="rounded-2xl bg-shade/20 border border-tint/[0.06] p-4">
                          <dt className="sr-only">{m.label}</dt>
                          <dd className="font-disp font-semibold text-[22px] md:text-[28px] leading-none grad-text inline-block">{m.value}</dd>
                          <dd className="mt-2 text-[12.5px] text-muted">{m.label}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
        <p className="mt-6 text-center text-[14px] text-muted">{ALSO_SUPPORTED}</p>
      </div>
      <AnimatePresence>{open && <DetailModal key={open.id} item={open} onClose={close} />}</AnimatePresence>
    </section>
  )
}
