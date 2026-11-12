'use client'
import { useEffect, useState } from 'react'
import { CASE_STUDIES, SMALL_PROJECTS, WORK_TILES, LENSES } from '../data/content'
import { useLens, lensColor, lensLabel } from './lens'
import { Rich, SectionHead, LinkButton, BrowserFrame, PhoneFrame, LockIcon, Tile, Eyebrow, ArrowIcon } from './ui'

const ALL_PROJECTS = [...CASE_STUDIES, ...SMALL_PROJECTS]
const byId = Object.fromEntries(ALL_PROJECTS.map((p) => [p.id, p]))

function LensDots({ ids, className = '' }) {
  return (
    <span className={`flex gap-1.5 ${className}`}>
      {ids.map((id) => (
        <span key={id} title={lensLabel(id)} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lensColor(id) }}>
          <span className="sr-only">{lensLabel(id)}</span>
        </span>
      ))}
    </span>
  )
}

/* ---------- The Work grid: one tile per project ---------- */

function WorkTile({ t, index }) {
  const { lens } = useLens()
  const p = byId[t.id]
  const dim = lens !== 'all' && !p.lenses.includes(lens)
  const desk = p.shots?.find((s) => !s.mobile)
  const phone = p.shots?.find((s) => s.mobile)
  const span = {
    hero: 'sm:col-span-2 lg:row-span-2',
    wide: 'sm:col-span-2',
    'wide-stat': 'sm:col-span-2',
  }[t.look] || ''
  const dark = t.look === 'dark'
  const base = `tile-lift group relative overflow-hidden flex flex-col ${span} ${dark ? 'bg-night' : 'bg-white'} ${dim ? 'opacity-[.38] hover:opacity-100 focus-visible:opacity-100' : ''}`
  const title = (
    <h3 className={`font-disp font-semibold leading-tight tracking-[-0.015em] ${t.look === 'hero' ? 'text-[26px] md:text-[28px] font-bold' : 'text-[18px]'} ${dark ? 'text-white' : 'text-ink'}`}>
      {p.title}
    </h3>
  )
  const foot = (
    <div className="mt-3 flex items-center justify-between gap-3">
      <LensDots ids={p.lenses} />
      <ArrowIcon className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${dark ? 'text-white/70' : 'text-fog'}`} />
    </div>
  )

  let body
  if (t.look === 'hero') {
    body = (
      <>
        <div className="relative bg-chip px-5 pt-5 md:px-6 md:pt-6">
          <img src={desk.src} alt={desk.caption} width={desk.w} height={desk.h} loading="lazy" className="block w-[86%] aspect-[16/10] object-cover object-top rounded-t-xl shadow-[0_10px_30px_-18px_rgba(17,21,28,.4)]" />
          {phone && (
            <img src={phone.src} alt={phone.caption} width={phone.w} height={phone.h} loading="lazy" className="absolute right-5 md:right-6 -bottom-4 w-[22%] aspect-[390/844] object-cover object-top rounded-2xl border-4 border-night" />
          )}
        </div>
        <div className="p-6 pt-8 flex-1 flex flex-col justify-end">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <div className="mt-2">{title}</div>
          <p className="mt-2 text-[15px] leading-relaxed">{t.line}</p>
          {foot}
        </div>
      </>
    )
  } else if (t.look === 'wide') {
    body = (
      <div className="flex flex-wrap h-full">
        <img src={desk.src} alt={desk.caption} width={desk.w} height={desk.h} loading="lazy" className="flex-[1_1_260px] min-w-0 block aspect-[16/10] object-cover object-left-top" />
        <div className="flex-[1_1_220px] p-[22px] flex flex-col justify-between">
          <div>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <div className="mt-2">{title}</div>
            <p className="mt-2 text-[14.5px] leading-relaxed">{t.line}</p>
          </div>
          {foot}
        </div>
      </div>
    )
  } else if (t.look === 'shot') {
    body = (
      <>
        <img src={desk.src} alt={desk.caption} width={desk.w} height={desk.h} loading="lazy" className="block w-full aspect-[16/9] object-cover object-top" />
        <div className="p-[22px] pt-4 flex-1 flex flex-col justify-end">
          {title}
          <p className="mt-1 text-[13.5px] leading-snug">{t.line}</p>
          {foot}
        </div>
      </>
    )
  } else {
    let visual = null
    if (t.look === 'dark' || t.look === 'stat' || t.look === 'wide-stat') {
      visual = (
        <p className={`font-disp font-bold text-[44px] leading-none tracking-[-0.03em] ${dark ? 'text-white' : ''}`} style={dark ? undefined : { color: lensColor(p.lenses[0]) }}>
          {t.big}
        </p>
      )
    } else if (t.look === 'gauge') {
      visual = (
        <div>
          <div aria-hidden="true" className="relative h-3 rounded-full bg-chip overflow-hidden">
            <span className="absolute inset-y-0 left-0 rounded-full bg-de" style={{ width: `${t.gauge}%` }} />
          </div>
          <p className="mt-2 font-mono text-[12px] text-fog">{t.gaugeLabel}</p>
        </div>
      )
    } else if (t.look === 'chat') {
      visual = <p className="px-3 py-2.5 rounded-xl bg-chip text-[13.5px] leading-snug text-ink">&ldquo;{t.ask}&rdquo;</p>
    } else if (t.look === 'flow') {
      visual = (
        <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[12px] text-ink">
          {t.flow.map((f, i) => (
            <li key={f} className="flex items-center gap-1.5">
              <span className="px-2 py-1 rounded-md bg-chip">{f}</span>
              {i < t.flow.length - 1 && <span aria-hidden="true" className="text-de">→</span>}
            </li>
          ))}
        </ol>
      )
    }
    body = (
      <div className={`p-[22px] h-full flex flex-col justify-between gap-5 ${t.look === 'wide-stat' ? 'min-h-[200px]' : 'min-h-[230px]'}`}>
        <Eyebrow className={dark ? 'text-[#9AA3B2]' : 'text-fog'}>{t.eyebrow}</Eyebrow>
        <div>
          {visual}
          <div className="mt-3">{title}</div>
          <p className={`mt-1 text-[13.5px] leading-snug ${dark ? 'text-[#C5CBD6]' : ''}`}>{t.line}</p>
          {foot}
        </div>
      </div>
    )
  }

  return (
    <Tile as="a" href={`#case-${t.id}`} delay={Math.min(index * 0.04, 0.3)} className={base} aria-label={`${p.title}: open the case study`}>
      {body}
    </Tile>
  )
}

/* ---------- Pipeline drawings ---------- */

// Horizontal on wide screens, vertical on phones.
function Lineage({ nodes }) {
  return (
    <ol className="flex flex-col lg:flex-row lg:flex-wrap gap-y-2 lg:gap-y-4">
      {nodes.map((n, i) => (
        <li key={n.tool} className="flex lg:items-stretch">
          <div className="w-full lg:w-[168px] rounded-xl border border-[#B7DCCD] bg-white px-3 py-2.5">
            <p className="font-mono text-[12.5px] font-medium text-de leading-tight">{n.tool}</p>
            <p className="text-[12.5px] text-slate leading-snug mt-1">{n.note}</p>
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

// Tall version used as the visual for work without screenshots.
function LineagePanel({ nodes, title }) {
  return (
    <figure className="rounded-2xl bg-chip p-5 md:p-7">
      <figcaption className="font-mono text-[12px] text-fog mb-5">pipeline, source to dashboard: {title}</figcaption>
      <ol className="relative">
        {nodes.map((n, i) => (
          <li key={n.tool} className="relative pl-10 pb-4 last:pb-0">
            {i < nodes.length - 1 && <span aria-hidden="true" className="absolute left-[13px] top-7 bottom-0 w-px bg-de/30" />}
            <span aria-hidden="true" className="absolute left-0 top-0.5 w-[27px] h-[27px] rounded-full bg-white flex items-center justify-center font-mono text-[11px] text-de">
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
          <span aria-hidden="true" className="absolute left-0 top-[0.55em] w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
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
          <li key={k} className="text-[14px] text-ink bg-chip rounded-lg px-3 py-1.5">{k}</li>
        ))}
      </ul>
    )
  }
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      {items.map((k) => (
        <div key={k.label} className="bg-chip rounded-xl px-4 py-3 flex flex-col-reverse justify-end">
          <dt className="text-[13px] text-fog">{k.label}</dt>
          <dd className="font-disp font-bold text-[22px] text-ink tracking-[-0.02em]">{k.value}</dd>
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
        <p className="text-[14.5px] text-fog">KPIs this work tracks</p>
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
    <div className="mt-8 rounded-2xl bg-chip p-2">
      <div role="tablist" aria-label={`${cs.title} by role`} className="flex gap-1 overflow-x-auto p-1">
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
              className={`shrink-0 inline-flex items-center gap-2 min-h-[40px] text-[14px] px-4 rounded-full transition-colors ${
                on ? 'text-white font-semibold' : 'text-[#3A414D] hover:bg-white'
              }`}
              style={on ? { backgroundColor: lensColor(id) } : undefined}
            >
              {!on && <span aria-hidden="true" className="w-2 h-2 rounded-full" style={{ backgroundColor: lensColor(id) }} />}
              {lensLabel(id)} view
            </button>
          )
        })}
      </div>
      <div id={`panel-${cs.id}`} role="tabpanel" aria-labelledby={`tab-${cs.id}-${tab}`} className="mt-1 bg-white rounded-xl px-5 md:px-7 py-6">
        {content[tab]}
      </div>
    </div>
  )
}

/* ---------- One case study ---------- */

// Results table used as the visual for research without screenshots.
function StudiesPanel({ studies }) {
  return (
    <figure className="rounded-2xl bg-chip p-5 md:p-7">
      <figcaption className="font-mono text-[12px] text-fog mb-4">five studies and their recorded results</figcaption>
      <ol className="space-y-2.5">
        {studies.map((s, i) => (
          <li key={s.name} className="grid grid-cols-[28px_1fr] gap-3 bg-white rounded-xl p-3.5">
            <span className="font-disp font-bold text-[17px] text-ml leading-6">{i + 1}</span>
            <div>
              <p className="text-[15px] font-semibold text-ink">{s.name}</p>
              <p className="text-[14px] text-slate">{s.shows}</p>
              <p className="font-mono text-[12.5px] text-ml mt-1">{s.result}</p>
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
    <div className="mt-6 space-y-3.5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        <section className="bg-chip rounded-2xl p-6 md:p-7">
          <h4 className="font-disp font-semibold text-[19px] text-ink mb-3">The problem</h4>
          <div className="space-y-3.5 text-[15.5px] leading-relaxed">
            {cs.overview.map((p) => <p key={p}><Rich text={p} /></p>)}
          </div>
        </section>
        <section className="bg-chip rounded-2xl p-6 md:p-7">
          <h4 className="font-disp font-semibold text-[19px] text-ink mb-3">How it works</h4>
          <ol className="space-y-4">
            {cs.workflow.map((w, i) => (
              <li key={w.step} className="grid grid-cols-[30px_1fr] gap-3">
                <span className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center font-mono text-[12px] text-ink">{i + 1}</span>
                <p className="text-[15px] leading-relaxed"><span className="font-semibold text-ink">{w.step}. </span>{w.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section>
        <h4 className="sr-only">Decisions and trade-offs</h4>
        <div className="grid md:grid-cols-3 gap-3.5">
          {cs.decisions.map((d) => (
            <div key={d.title} className="rounded-2xl border border-rule p-5 md:p-6">
              <Eyebrow>decision</Eyebrow>
              <p className="mt-2 font-disp font-semibold text-[16.5px] leading-snug text-ink">{d.title}</p>
              <p className="mt-2 text-[14.5px] leading-relaxed">{d.why}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-fog"><span className="font-semibold text-gi">Trade-off: </span>{d.tradeoff}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lens-tint rounded-2xl p-6 md:p-7">
        <h4 className="font-mono text-[12px] lens-text mb-2">outcome</h4>
        <p className="font-disp font-medium text-[18px] md:text-[20px] leading-snug text-ink max-w-[860px]">{cs.outcome}</p>
      </section>

      {(desk.length > 0 || phones.length > 0) && (
        <section className="pt-4">
          <h4 className="font-disp font-semibold text-[19px] text-ink mb-4">More screens</h4>
          <div className="grid md:grid-cols-2 gap-5">
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
  // Opening a case from a tile or a link expands it.
  useEffect(() => {
    const check = () => window.location.hash === `#case-${cs.id}` && setOpen(true)
    check()
    window.addEventListener('hashchange', check)
    return () => window.removeEventListener('hashchange', check)
  }, [cs.id])

  return (
    <Tile as="article" id={`case-${cs.id}`} aria-labelledby={`case-${cs.id}-title`} className="bg-white p-5 sm:p-7 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-12 items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>{cs.kind.toLowerCase()} · {cs.year}</Eyebrow>
            <LensDots ids={cs.lenses} />
          </div>
          <h3 id={`case-${cs.id}-title`} className="mt-3 font-disp font-bold text-ink text-[30px] md:text-[40px] leading-[1.04] tracking-[-0.03em]">
            {cs.title}
          </h3>
          <p className="mt-4 text-[16.5px] md:text-[17.5px] leading-relaxed">{cs.hook}</p>

          <dl className="mt-5 grid grid-cols-[64px_1fr] gap-x-3 gap-y-1.5 text-[14.5px]">
            <dt className="text-fog">Role</dt><dd className="text-ink">{cs.role}</dd>
            <dt className="text-fog">Stack</dt><dd className="text-ink">{cs.stack}</dd>
          </dl>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-2.5">
            {cs.links.length > 0 ? (
              cs.links.map((l) => (
                <LinkButton key={l.href} href={l.href} primary={l.primary} note={l.note} className="w-full sm:w-auto">{l.label}</LinkButton>
              ))
            ) : (
              <p className="inline-flex items-center gap-2 text-[14px] text-fog bg-chip rounded-xl px-3.5 py-2.5">
                <LockIcon className="w-4 h-4" /> {cs.privateNote}
              </p>
            )}
          </div>

          <dl className="mt-7 grid grid-cols-2 gap-2.5">
            {cs.metrics.map((m) => (
              <div key={m.label} className="bg-chip rounded-2xl px-4 py-4 flex flex-col-reverse justify-end">
                <dt className="text-[13px] leading-snug text-fog mt-1.5">{m.label}</dt>
                <dd className="font-disp font-bold text-[28px] leading-none tracking-[-0.03em] lens-text">{m.value}</dd>
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
        className="mt-5 inline-flex items-center gap-2 min-h-[44px] px-5 rounded-full bg-night text-white text-[14.5px] font-medium hover:bg-[color:var(--lens)] transition-colors"
      >
        {open ? 'Hide the full case study' : 'Read the full case study'}
        <span aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      <div id={`case-${cs.id}-details`} hidden={!open}>
        <Details cs={cs} />
      </div>
    </Tile>
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
    <section id="work" aria-labelledby="work-title" className="max-w-page mx-auto px-4 md:px-8 pt-16 md:pt-24">
      <SectionHead
        id="work-title"
        title="Work"
        intro={
          lens === 'all'
            ? 'Real systems with real screens and code. Pick a role above and the projects that fit it come forward. Every tile opens a full case study.'
            : `Projects that show ${label.toLowerCase()} work are in front. The case studies below open on their ${label} view.`
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {WORK_TILES.map((t, i) => <WorkTile key={t.id} t={t} index={i} />)}
      </div>

      <div className="mt-16 md:mt-20">
        <SectionHead
          title={lens === 'all' ? 'Case studies' : `Case studies for a ${label} role`}
          intro={lens === 'all' ? 'The problem, how it works, the decisions behind it, and the outcome.' : `${cases.length} projects, ordered by how much they show ${label.toLowerCase()} work.`}
        />
        <div className="space-y-3.5">
          {cases.map((cs) => <Exhibit key={cs.id} cs={cs} />)}

          {small.map((p) => (
            <Tile as="article" key={p.id} id={`case-${p.id}`} aria-labelledby={`case-${p.id}-title`} className="bg-white p-5 sm:p-7 md:p-10 grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 md:gap-12 items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[12px] text-white bg-gi rounded-full px-2.5 py-1">{p.status.toLowerCase()}</span>
                  <LensDots ids={p.lenses} />
                </div>
                <h3 id={`case-${p.id}-title`} className="mt-3 font-disp font-bold text-ink text-[26px] md:text-[30px] leading-tight tracking-[-0.025em]">{p.title}</h3>
                <p className="mt-2 text-[14.5px] text-fog">{p.stack}</p>
              </div>
              <div>
                <p className="text-[16px] leading-relaxed">{p.body}</p>
                <LinkButton href={p.repo} className="mt-4">View GitHub Repository</LinkButton>
              </div>
            </Tile>
          ))}
        </div>
      </div>
    </section>
  )
}
