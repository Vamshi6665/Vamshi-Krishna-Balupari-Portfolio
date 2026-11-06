'use client'
import { useEffect, useState } from 'react'
import { CASE_STUDIES, SMALL_PROJECTS, LENSES } from '../data/content'
import { useLens, lensColor, lensLabel } from './lens'
import { Rich, SectionHead, LinkButton, BrowserFrame, PhoneFrame, LockIcon } from './ui'

/* ---------- Pipeline drawings ---------- */

// Horizontal on wide screens, vertical on phones.
function Lineage({ nodes }) {
  return (
    <ol className="flex flex-col lg:flex-row lg:flex-wrap gap-y-2 lg:gap-y-4">
      {nodes.map((n, i) => (
        <li key={n.tool} className="flex lg:items-stretch">
          <div className="flex lg:flex-col items-center">
            <div className="w-full lg:w-[168px] rounded-[10px] border bg-white px-3 py-2.5" style={{ borderColor: '#B7DCCD' }}>
              <p className="font-mono text-[12.5px] font-medium text-de leading-tight">{n.tool}</p>
              <p className="text-[12.5px] text-slate leading-snug mt-1">{n.note}</p>
            </div>
          </div>
          {i < nodes.length - 1 && (
            <span aria-hidden="true" className="hidden lg:flex items-center px-1.5 text-de/60">
              <svg width="18" height="10" viewBox="0 0 18 10"><path d="M0 5h15M11 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}

// Tall framed version used as the visual for work without screenshots.
function LineagePanel({ nodes, title }) {
  return (
    <figure className="rounded-[14px] border border-rule bg-mist p-5 md:p-7">
      <figcaption className="text-[13.5px] text-fog mb-4">Pipeline, source to dashboard: {title}</figcaption>
      <ol className="relative">
        {nodes.map((n, i) => (
          <li key={n.tool} className="relative pl-9 pb-4 last:pb-0">
            {i < nodes.length - 1 && <span aria-hidden="true" className="absolute left-[11px] top-6 bottom-0 w-px bg-de/30" />}
            <span aria-hidden="true" className="absolute left-0 top-1 w-[23px] h-[23px] rounded-full bg-white border border-de/40 flex items-center justify-center font-mono text-[10.5px] text-de">
              {i + 1}
            </span>
            <p className="font-mono text-[13.5px] font-medium text-ink leading-tight">{n.tool}</p>
            <p className="text-[13.5px] text-slate leading-snug mt-0.5">{n.note}</p>
          </li>
        ))}
      </ol>
    </figure>
  )
}

/* ---------- Role panel ---------- */

function Bullets({ items, color }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className="relative pl-5 text-[15px] leading-relaxed">
          <span aria-hidden="true" className="absolute left-0 top-[0.62em] w-2 h-[2px] rounded" style={{ backgroundColor: color }} />
          {t}
        </li>
      ))}
    </ul>
  )
}

function Kpis({ items }) {
  if (typeof items[0] === 'string') {
    return (
      <ul className="flex flex-wrap gap-2">
        {items.map((k) => (
          <li key={k} className="text-[14px] text-ink bg-white border border-rule rounded-lg px-3 py-1.5">{k}</li>
        ))}
      </ul>
    )
  }
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-rule border border-rule rounded-xl overflow-hidden">
      {items.map((k) => (
        <div key={k.label} className="bg-white px-4 py-3 flex flex-col-reverse justify-end">
          <dt className="text-[13px] text-fog">{k.label}</dt>
          <dd className="font-disp font-bold text-[22px] text-ink tracking-[-0.01em]">{k.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function RolePanel({ cs }) {
  const { lens } = useLens()
  const pick = () => (cs.lenses.includes(lens) ? lens : cs.lenses[0])
  const [tab, setTab] = useState(pick)
  useEffect(() => setTab(pick()), [lens]) // follow the global lens

  const color = lensColor(tab)
  const lineageInPanel = Boolean(cs.shots)
  const content = {
    da: (
      <div className="space-y-3">
        <p className="text-[14.5px] text-slate">KPIs this work tracks</p>
        <Kpis items={cs.kpis || []} />
      </div>
    ),
    de: (
      <div className="space-y-5">
        {lineageInPanel && cs.pipeline && <Lineage nodes={cs.pipeline} />}
        {cs.deNotes && <Bullets items={cs.deNotes} color={color} />}
      </div>
    ),
    ml: cs.ml && <Bullets items={cs.ml} color={color} />,
    genai: cs.genai && <Bullets items={cs.genai} color={color} />,
  }

  return (
    <div className="mt-10 rounded-[14px] border border-rule bg-mist/60">
      <div role="tablist" aria-label={`${cs.title} by role`} className="flex gap-1 overflow-x-auto px-3 pt-3">
        {cs.lenses.map((id) => {
          const on = tab === id
          return (
            <button
              key={id}
              role="tab"
              type="button"
              id={`tab-${cs.id}-${id}`}
              aria-selected={on}
              aria-controls={`panel-${cs.id}`}
              onClick={() => setTab(id)}
              className={`shrink-0 inline-flex items-center gap-2 text-[14px] px-3.5 py-2 rounded-t-[10px] border-b-2 transition-colors ${
                on ? 'bg-white font-medium text-ink' : 'border-transparent text-fog hover:text-ink'
              }`}
              style={on ? { borderBottomColor: lensColor(id) } : undefined}
            >
              <span aria-hidden="true" className="w-2 h-2 rounded-full" style={{ backgroundColor: lensColor(id) }} />
              {lensLabel(id)} view
            </button>
          )
        })}
      </div>
      <div id={`panel-${cs.id}`} role="tabpanel" aria-labelledby={`tab-${cs.id}-${tab}`} className="bg-white rounded-b-[14px] border-t border-rule px-5 md:px-7 py-6">
        {content[tab]}
      </div>
    </div>
  )
}

/* ---------- One project ---------- */

// Results table used as the visual for research without screenshots.
function StudiesPanel({ studies }) {
  return (
    <figure className="rounded-[14px] border border-rule bg-mist p-5 md:p-7">
      <figcaption className="text-[13.5px] text-fog mb-4">Five studies and their recorded results</figcaption>
      <ol className="divide-y divide-rule">
        {studies.map((s, i) => (
          <li key={s.name} className="grid grid-cols-[24px_1fr] gap-3 py-3.5 first:pt-0 last:pb-0">
            <span className="font-disp font-bold text-[17px] text-ml leading-6">{i + 1}</span>
            <div>
              <p className="text-[15px] font-semibold text-ink">{s.name}</p>
              <p className="text-[14px] text-slate">{s.shows}</p>
              <p className="font-mono text-[13px] text-ml mt-1">{s.result}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-[12.5px] text-fog">Results are as recorded in the notebooks and may come from different prototype runs.</p>
    </figure>
  )
}

function Visual({ cs }) {
  if (!cs.shots && cs.studies) return <StudiesPanel studies={cs.studies} />
  if (!cs.shots) return <LineagePanel nodes={cs.pipeline} title={cs.title} />
  const desk = cs.shots.find((s) => !s.mobile)
  const phone = cs.shots.find((s) => s.mobile)
  return (
    <div className="relative lg:pr-10 lg:pb-14">
      <BrowserFrame {...desk} label={cs.frameLabel} eager={cs.id === 'tifa-inventory'} />
      {phone && (
        <PhoneFrame {...phone} className="hidden lg:block absolute right-0 bottom-0 w-[132px] xl:w-[150px]" />
      )}
      <p className="mt-3 text-[13px] text-fog lg:max-w-[78%]">{desk.caption}</p>
    </div>
  )
}

function Details({ cs }) {
  // The first desktop and first phone screen are already shown in the visual.
  const desk = cs.shots ? cs.shots.filter((s) => !s.mobile).slice(1) : []
  const phones = cs.shots ? cs.shots.filter((s) => s.mobile).slice(1) : []
  return (
    <div className="mt-10 space-y-12">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
        <section>
          <h4 className="font-disp font-semibold text-[20px] text-ink mb-3">The problem</h4>
          <div className="space-y-3.5 text-[16px] leading-relaxed">
            {cs.overview.map((p) => <p key={p}><Rich text={p} /></p>)}
          </div>
        </section>
        <section>
          <h4 className="font-disp font-semibold text-[20px] text-ink mb-3">How it works</h4>
          <ol className="space-y-4">
            {cs.workflow.map((w, i) => (
              <li key={w.step} className="grid grid-cols-[28px_1fr] gap-3">
                <span className="w-7 h-7 rounded-full border border-rule flex items-center justify-center text-[12.5px] text-ink">{i + 1}</span>
                <p className="text-[15px] leading-relaxed"><span className="font-semibold text-ink">{w.step}. </span>{w.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section>
        <h4 className="font-disp font-semibold text-[20px] text-ink mb-4">Decisions and trade-offs</h4>
        <div className="grid md:grid-cols-3 border-t border-rule">
          {cs.decisions.map((d, i) => (
            <div key={d.title} className={`py-5 md:px-5 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-rule' : 'md:pl-0'}`}>
              <p className="font-semibold text-[16px] text-ink mb-2">{d.title}</p>
              <p className="text-[15px] leading-relaxed">{d.why}</p>
              <p className="text-[14.5px] leading-relaxed text-fog mt-2"><span className="text-gi font-medium">Trade-off: </span>{d.tradeoff}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h4 className="font-disp font-semibold text-[20px] text-ink mb-2">Outcome</h4>
        <p className="text-[16.5px] leading-relaxed text-ink max-w-[780px]">{cs.outcome}</p>
      </section>

      {(desk.length > 0 || phones.length > 0) && (
        <section>
          <h4 className="font-disp font-semibold text-[20px] text-ink mb-4">More screens</h4>
          <div className="grid md:grid-cols-2 gap-6">
            {desk.map((s) => (
              <div key={s.src}>
                <BrowserFrame {...s} label={cs.frameLabel} />
                <p className="mt-2.5 text-[13.5px] text-fog">{s.caption}</p>
              </div>
            ))}
          </div>
          {phones.length > 0 && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-[520px]">
              {phones.map((s) => (
                <div key={s.src}>
                  <PhoneFrame {...s} />
                  <p className="mt-2 text-[13px] text-fog">{s.caption}</p>
                </div>
              ))}
            </div>
          )}
          {cs.shotsNote && <p className="mt-5 text-[13.5px] text-fog">{cs.shotsNote}</p>}
        </section>
      )}
      {!desk.length && !phones.length && cs.shotsNote && <p className="text-[13.5px] text-fog">{cs.shotsNote}</p>}
    </div>
  )
}

function Exhibit({ cs }) {
  const [open, setOpen] = useState(false)
  const metricCols = cs.metrics.length === 4 ? 'sm:grid-cols-4' : cs.metrics.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
  return (
    <article id={`case-${cs.id}`} aria-labelledby={`case-${cs.id}-title`} className="py-14 md:py-20 border-t border-rule first:border-t-0 first:pt-0">
      <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-14 items-start">
        <div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-fog mb-4">
            <span className="text-ink font-medium">{cs.kind}</span>
            <span>{cs.year}</span>
          </p>
          <h3 id={`case-${cs.id}-title`} className="font-disp font-bold text-ink text-[32px] md:text-[42px] leading-[1.04] tracking-[-0.02em]">
            {cs.title}
          </h3>
          <p className="mt-4 text-[17px] md:text-[18px] leading-relaxed text-slate">{cs.hook}</p>

          <dl className="mt-6 grid grid-cols-[64px_1fr] gap-x-3 gap-y-1.5 text-[14.5px]">
            <dt className="text-fog">Role</dt><dd className="text-ink">{cs.role}</dd>
            <dt className="text-fog">Stack</dt><dd className="text-ink">{cs.stack}</dd>
          </dl>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-2.5">
            {cs.links.length > 0 ? (
              cs.links.map((l) => (
                <LinkButton key={l.href} href={l.href} primary={l.primary} note={l.note} className="w-full sm:w-auto">{l.label}</LinkButton>
              ))
            ) : (
              <p className="inline-flex items-center gap-2 text-[14px] text-fog">
                <LockIcon className="w-4 h-4" /> {cs.privateNote}
              </p>
            )}
          </div>

          <dl className={`mt-8 grid grid-cols-2 ${metricCols} lg:grid-cols-2 gap-x-6 gap-y-5 border-t border-rule pt-6`}>
            {cs.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse justify-end">
                <dt className="text-[13.5px] leading-snug text-fog mt-1">{m.label}</dt>
                <dd className="font-disp font-bold text-[32px] leading-none tracking-[-0.02em] lens-text">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Visual cs={cs} />
      </div>

      <RolePanel cs={cs} />

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`case-${cs.id}-details`}
        className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ink border-b border-ink/30 hover:border-ink pb-0.5"
      >
        {open ? 'Hide the full case study' : 'Read the full case study'}
        <span aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      <div id={`case-${cs.id}-details`} hidden={!open}>
        <Details cs={cs} />
      </div>
    </article>
  )
}

export default function Work() {
  const { lens } = useLens()
  const cases = lens === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.lenses.includes(lens)).sort((a, b) => (b.lenses[0] === lens) - (a.lenses[0] === lens))
  const small = SMALL_PROJECTS.filter((p) => lens === 'all' || p.lenses.includes(lens))
  const label = LENSES.find((l) => l.id === lens).label

  return (
    <section id="work" aria-labelledby="work-title" className="pt-20 md:pt-28">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <SectionHead
          id="work-title"
          title={lens === 'all' ? 'Selected work' : `Work for a ${label} role`}
          intro={
            lens === 'all'
              ? 'Real systems with real screens and code. Switch the view above to see each project through the role you are hiring for.'
              : `${cases.length} projects, ordered by how much they show ${label.toLowerCase()} work. Each one opens on its ${label} view.`
          }
        />
        <div>
          {cases.map((cs) => <Exhibit key={cs.id} cs={cs} />)}
        </div>

        {small.length > 0 && (
          <div className="border-t border-rule py-12 md:py-16">
            <h3 className="font-disp font-bold text-ink text-[26px] tracking-[-0.02em] mb-6">Also building</h3>
            {small.map((p) => (
              <article key={p.id} id={`case-${p.id}`} className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-14 items-start">
                <div>
                  <p className="text-[14px] text-fog mb-2"><span className="text-gi font-medium">{p.status}</span></p>
                  <h4 className="font-disp font-bold text-ink text-[24px] leading-tight tracking-[-0.015em]">{p.title}</h4>
                  <p className="mt-2 text-[14.5px] text-fog">{p.stack}</p>
                </div>
                <div>
                  <p className="text-[16px] leading-relaxed">{p.body}</p>
                  <LinkButton href={p.repo} className="mt-4">View GitHub Repository</LinkButton>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
