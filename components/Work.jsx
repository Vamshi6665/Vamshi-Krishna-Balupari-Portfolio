'use client'
import { useState } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Rich, Chip, LinkButton } from './ui'
import { CASE_STUDIES, PROJECTS, LENSES } from '../data/content'

const TONES = {
  teal: 'bg-tealx/10 border-tealx/25 text-tealx',
  indigo: 'bg-indigo/10 border-indigo/25 text-indigo',
  rose: 'bg-rosex/10 border-rosex/25 text-rosex',
  violet: 'bg-violet/10 border-violet/25 text-violet',
  amber: 'bg-amberx/10 border-amberx/25 text-amberx',
}
const LENS_LABEL = Object.fromEntries(LENSES.map((l) => [l.id, l.label]))

function Label({ n, children }) {
  return (
    <h4 className="flex items-center gap-2.5 font-mono text-[12px] tracking-[.1em] uppercase text-soft mb-4">
      {n && <span className="text-indigo">{n}</span>}
      <span>{children}</span>
      <span className="flex-1 h-px bg-line" aria-hidden="true" />
    </h4>
  )
}

function Pipeline({ steps }) {
  return (
    <div>
      <p className="font-mono text-[11px] tracking-[.1em] uppercase text-soft mb-2.5">Pipeline</p>
      <ol className="flex flex-col md:flex-row md:flex-wrap md:items-stretch gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex md:items-center gap-2">
            <span className="flex-1 md:flex-none flex items-center gap-2.5 rounded-xl border border-indigo/20 bg-white px-3 py-2 text-[13.5px] text-ink leading-snug">
              <span className="font-mono text-[11px] text-indigo shrink-0">{String(i + 1).padStart(2, '0')}</span>
              {s}
            </span>
            {i < steps.length - 1 && (
              <span aria-hidden="true" className="hidden md:inline text-indigo/50">→</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

function Metrics({ items }) {
  const cols = items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
  return (
    <dl className={`grid grid-cols-2 ${cols} gap-3`}>
      {items.map((m) => (
        <div key={m.label} className="flex flex-col-reverse justify-end gap-2 rounded-2xl bg-grad-soft border border-indigo/15 px-4 py-4">
          <dt className="text-[13px] leading-snug text-body">{m.label}</dt>
          <dd className="font-disp font-bold text-[26px] md:text-[30px] leading-none text-grad">{m.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function Shot({ s, eager }) {
  return (
    <figure className={`rounded-2xl border border-line overflow-hidden bg-[#f4f3f0] ${s.mobile ? '' : ''}`}>
      <a href={s.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size screenshot: ${s.caption}`} className="block">
        <img
          src={s.src}
          alt={s.caption}
          width={s.w}
          height={s.h}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-auto block hover:opacity-95 transition-opacity"
        />
      </a>
      <figcaption className="px-3.5 py-2.5 text-[13px] leading-snug text-body border-t border-line bg-white">{s.caption}</figcaption>
    </figure>
  )
}

function Gallery({ shots, start = 0, end }) {
  const list = shots.slice(start, end)
  const desktop = list.filter((s) => !s.mobile)
  const mobile = list.filter((s) => s.mobile)
  return (
    <div className="space-y-4">
      {desktop.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          {desktop.map((s) => <Shot key={s.src} s={s} />)}
        </div>
      )}
      {mobile.length > 0 && (
        <div className="grid grid-cols-3 gap-3 max-w-[560px]">
          {mobile.map((s) => <Shot key={s.src} s={s} />)}
        </div>
      )}
    </div>
  )
}

function RoleCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-line bg-[#fbfaf8] p-5">
      <p className="font-disp font-semibold text-[15px] text-ink mb-3">{title}</p>
      {children}
    </div>
  )
}

function Bullets({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="text-[14px] leading-relaxed pl-4 relative">
          <span aria-hidden="true" className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-indigo/60" />
          {t}
        </li>
      ))}
    </ul>
  )
}

function Kpis({ items }) {
  if (typeof items[0] === 'string') return <Bullets items={items} />
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-2.5">
      {items.map((k) => (
        <div key={k.label}>
          <dt className="text-[12.5px] text-soft">{k.label}</dt>
          <dd className="font-disp font-semibold text-[17px] text-ink">{k.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function CaseStudy({ cs, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const previewCount = cs.shots ? Math.min(2, cs.shots.filter((s) => !s.mobile).length) : 0
  const roleCards = [
    cs.kpis && { title: 'Analyst view: KPIs tracked', body: <Kpis items={cs.kpis} /> },
    cs.ml && { title: 'Machine learning', body: <Bullets items={cs.ml} /> },
    cs.genai && { title: 'Gen AI', body: <Bullets items={cs.genai} /> },
  ].filter(Boolean)
  const bodyId = `case-${cs.id}-body`

  return (
    <article
      id={`case-${cs.id}`}
      aria-labelledby={`case-${cs.id}-title`}
      className="bg-white border border-line rounded-[24px] overflow-hidden hover:shadow-[0_24px_60px_-30px_rgba(25,24,35,.2)] transition-shadow"
    >
      <header className="px-5 md:px-10 pt-7 md:pt-9 pb-7 border-b border-line bg-gradient-to-br from-white to-[#faf9ff]">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`inline-flex items-center font-mono text-[11.5px] tracking-[.06em] uppercase px-3 py-1 rounded-full border ${TONES[cs.tone]}`}>
            {cs.badge}
          </span>
          <span className="font-mono text-[12px] text-soft mr-1">{cs.year}</span>
          {cs.lenses.map((l) => (
            <span key={l} className="text-[12px] font-medium text-body bg-[#f4f3f0] border border-line rounded-full px-2.5 py-0.5">
              {LENS_LABEL[l]}
            </span>
          ))}
        </div>
        <h3 id={`case-${cs.id}-title`} className="font-disp font-bold text-[28px] md:text-[34px] leading-tight tracking-tight text-ink mb-3">
          {cs.title}
        </h3>
        <p className="text-[17px] md:text-[18px] leading-relaxed text-ink/80 max-w-[760px] mb-6">{cs.hook}</p>

        {cs.links.length > 0 ? (
          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mb-7">
            {cs.links.map((l) => (
              <LinkButton key={l.href} href={l.href} primary={l.primary} className="w-full sm:w-auto">{l.label}</LinkButton>
            ))}
          </div>
        ) : (
          <p className="inline-flex items-center gap-2 font-mono text-[12px] text-soft border border-dashed border-line rounded-xl px-3.5 py-2 mb-7">
            <span aria-hidden="true">🔒</span> {cs.privateNote}
          </p>
        )}

        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-[760px]">
          {cs.meta.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-[11px] tracking-[.1em] uppercase text-soft">{m.label}</dt>
              <dd className="text-[14.5px] text-ink mt-0.5">{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="px-5 md:px-10 py-7 md:py-9 space-y-7">
        {cs.pipeline && <Pipeline steps={cs.pipeline} />}
        <Metrics items={cs.metrics} />
        {previewCount > 0 && <Gallery shots={cs.shots.filter((s) => !s.mobile)} end={previewCount} />}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={bodyId}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-disp font-semibold text-[14.5px] text-indigo px-5 py-2.5 rounded-xl border-[1.5px] border-indigo/30 bg-indigo/5 hover:bg-indigo/10 transition-colors"
        >
          {open ? 'Hide the full case study' : 'Read the full case study'}
          <span aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
        </button>

        <div id={bodyId} hidden={!open} className="space-y-10 pt-2">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            <section>
              <Label n="01">Overview and problem</Label>
              <div className="space-y-3.5 text-[15.5px] leading-relaxed">
                {cs.overview.map((p) => <p key={p}><Rich text={p} /></p>)}
              </div>
            </section>
            <section>
              <Label n="02">How it works</Label>
              <ol className="space-y-4">
                {cs.workflow.map((w, i) => (
                  <li key={w.step} className="relative pl-10">
                    {i < cs.workflow.length - 1 && (
                      <span aria-hidden="true" className="absolute left-[13px] top-[27px] -bottom-4 w-px bg-indigo/20" />
                    )}
                    <span className="absolute left-0 top-0 w-[27px] h-[27px] rounded-full bg-white border-[1.5px] border-indigo/30 flex items-center justify-center font-mono text-[11px] text-indigo">
                      {i + 1}
                    </span>
                    <p className="font-disp font-semibold text-[15px] text-ink leading-[27px]">{w.step}</p>
                    <p className="text-[14.5px] leading-relaxed">{w.text}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {roleCards.length > 0 && (
            <section>
              <Label n="03">By role</Label>
              <div className={`grid gap-3 ${roleCards.length > 1 ? 'md:grid-cols-2' : ''} ${roleCards.length > 2 ? 'xl:grid-cols-3' : ''}`}>
                {roleCards.map((c) => <RoleCard key={c.title} title={c.title}>{c.body}</RoleCard>)}
              </div>
            </section>
          )}

          <section>
            <Label n={roleCards.length > 0 ? '04' : '03'}>Key decisions and trade-offs</Label>
            <div className="grid md:grid-cols-3 gap-3">
              {cs.decisions.map((d) => (
                <div key={d.title} className="flex flex-col rounded-2xl border border-line bg-[#fbfaf8] p-4 md:p-5">
                  <p className="font-disp font-semibold text-[16px] text-ink mb-2">{d.title}</p>
                  <p className="text-[14.5px] leading-relaxed mb-3">{d.why}</p>
                  <p className="mt-auto text-[14px] leading-relaxed pt-3 border-t border-line">
                    <span className="font-mono text-[11px] tracking-[.1em] uppercase text-amberx mr-1.5">Trade-off</span>
                    {d.tradeoff}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Label n={roleCards.length > 0 ? '05' : '04'}>Outcome</Label>
            <p className="text-[16px] leading-relaxed text-ink max-w-[780px]">{cs.outcome}</p>
          </section>

          {cs.shots && cs.shots.length > previewCount && (
            <section>
              <Label>More screens</Label>
              <Gallery
                shots={[...cs.shots.filter((s) => !s.mobile).slice(previewCount), ...cs.shots.filter((s) => s.mobile)]}
              />
            </section>
          )}
          {cs.shotsNote && <p className="text-[13px] text-soft italic">{cs.shotsNote}</p>}

          <div className="flex flex-wrap gap-1.5 pt-6 border-t border-line">
            {cs.stack.map((s) => <Chip key={s}>{s}</Chip>)}
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ p }) {
  const rows = [['problem', 'Problem'], ['build', 'Built'], ['decision', 'Key decision'], ['impact', 'Impact']]
  return (
    <article className="h-full flex flex-col bg-white border border-line rounded-[20px] p-6 hover:border-indigo/35 hover:-translate-y-1 hover:shadow-[0_18px_44px_-24px_rgba(25,24,35,.18)] transition-all">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span
          className={`font-mono text-[11px] tracking-[.06em] uppercase px-2.5 py-1 rounded-full border ${
            p.status === 'In progress' ? 'bg-amberx/10 border-amberx/25 text-amberx' : 'bg-tealx/10 border-tealx/25 text-tealx'
          }`}
        >
          {p.status}
        </span>
        <span className="font-mono text-[12px] text-soft">{p.year}</span>
      </div>
      <h4 className="font-disp font-semibold text-[20px] text-ink leading-tight mb-1.5">{p.title}</h4>
      <p className="text-[12.5px] text-soft mb-4">{p.lenses.map((l) => LENS_LABEL[l]).join(' · ')}</p>
      <dl className="space-y-3 flex-1 mb-5">
        {rows.map(([key, label]) => (
          <div key={key}>
            <dt className="font-mono text-[11px] tracking-[.1em] uppercase text-soft mb-0.5">{label}</dt>
            <dd className={`text-[14.5px] leading-relaxed ${key === 'impact' ? 'text-ink font-medium' : ''}`}>{p[key]}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {p.chips.map((c) => <Chip key={c}>{c}</Chip>)}
      </div>
      <LinkButton href={p.repo} className="w-full">View GitHub Repository</LinkButton>
    </article>
  )
}

export default function Work() {
  const [lens, setLens] = useState('all')
  const match = (item) => lens === 'all' || item.lenses.includes(lens)
  const cases = CASE_STUDIES.filter(match)
  const projects = PROJECTS.filter(match)
  const count = (id) => [...CASE_STUDIES, ...PROJECTS].filter((x) => id === 'all' || x.lenses.includes(id)).length
  const tabs = [{ id: 'all', label: 'All work' }, ...LENSES]

  return (
    <section id="work" className="px-5 md:px-8 py-16 md:py-24 bg-gradient-to-b from-[#f5f3ff] to-bg">
      <div className="max-w-[1120px] mx-auto">
        <SectionHead
          tag="Work"
          title="Case studies"
          sub="Each project shows the problem, the pipeline, the metrics, and the trade-offs. Filter by the role you're hiring for."
        />

        <div role="group" aria-label="Filter work by role" className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 md:mx-0 md:px-0 mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setLens(t.id)}
              aria-pressed={lens === t.id}
              className={`shrink-0 inline-flex items-center gap-2 text-[14px] font-medium px-4 py-2.5 rounded-xl border-[1.5px] transition-colors ${
                lens === t.id ? 'bg-ink text-white border-ink' : 'bg-white text-ink border-line hover:border-indigo hover:text-indigo'
              }`}
            >
              {t.label}
              <span className={`font-mono text-[11.5px] ${lens === t.id ? 'text-white/70' : 'text-soft'}`}>{count(t.id)}</span>
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {cases.map((cs) => (
            <Reveal key={cs.id}>
              <CaseStudy cs={cs} defaultOpen={cs.id === 'tifa-inventory'} />
            </Reveal>
          ))}
        </div>

        {projects.length > 0 && (
          <div id="projects" className="mt-16 scroll-mt-20">
            <h3 className="font-disp font-bold text-ink text-[26px] md:text-[30px] tracking-tight mb-2">More projects</h3>
            <p className="text-[15.5px] text-soft mb-6">Pipelines and modeling work, each with its code on GitHub.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
