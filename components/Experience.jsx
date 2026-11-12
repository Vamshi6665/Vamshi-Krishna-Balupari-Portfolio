'use client'
import { EXPERIENCE } from '../data/content'
import { Rich, SectionHead, Tile, Eyebrow, ArrowIcon } from './ui'

function Bullets({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((b) => (
        <li key={b} className="relative pl-5 text-[15px] leading-relaxed">
          <span aria-hidden="true" className="absolute left-0 top-[0.6em] w-2 h-2 rounded-full lens-bg" />
          <Rich text={b} />
        </li>
      ))}
    </ul>
  )
}

function CaseLinks({ links }) {
  if (!links) return null
  return (
    <p className="mt-5 flex flex-wrap gap-2 text-[14px]">
      {links.map((l) => (
        <a key={l.href} href={l.href} className="group inline-flex items-center gap-1.5 min-h-[36px] px-3 rounded-lg bg-chip text-ink font-medium hover:bg-night hover:text-white transition-colors">
          {l.label} <ArrowIcon className="w-3.5 h-3.5" />
        </a>
      ))}
    </p>
  )
}

export default function Experience() {
  const [now, research, dxc] = EXPERIENCE
  return (
    <section id="experience" aria-labelledby="exp-title" className="max-w-page mx-auto px-4 md:px-8 pt-16 md:pt-24">
      <SectionHead id="exp-title" title="Experience" intro="Four-plus years of data engineering and analytics, from enterprise clients to a business I support today." />

      <ol className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        {[now, research].map((job, i) => (
          <Tile as="li" key={job.org} delay={i * 0.05} className="bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Eyebrow className={i === 0 ? 'text-de' : 'text-fog'}>
                {i === 0 && <span className="live-dot inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 align-middle" aria-hidden="true" />}
                {job.dates.toLowerCase()}
              </Eyebrow>
              <span className="text-[13px] text-fog">{job.location}</span>
            </div>
            <h3 className="mt-4 font-disp font-bold text-[24px] md:text-[26px] leading-tight tracking-[-0.025em] text-ink">{job.role}</h3>
            <p className="text-[15px] text-fog mt-1 mb-5">{job.org}</p>
            {job.groups.map((g, gi) => <Bullets key={gi} items={g.bullets} />)}
            <CaseLinks links={job.links} />
          </Tile>
        ))}

        <Tile as="li" delay={0.1} className="lg:col-span-2 bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Eyebrow>{dxc.dates.toLowerCase()}</Eyebrow>
            <span className="text-[13px] text-fog">{dxc.location}</span>
          </div>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="font-disp font-bold text-[24px] md:text-[26px] leading-tight tracking-[-0.025em] text-ink">{dxc.role}</h3>
              <p className="text-[15px] text-fog mt-1">{dxc.org}</p>
            </div>
            {dxc.note && <p className="text-[13.5px] font-medium text-ink bg-chip rounded-full px-3 py-1.5">{dxc.note}</p>}
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-3.5">
            {dxc.groups.map((g) => (
              <div key={g.label} className="bg-chip rounded-2xl p-5 md:p-6">
                <p className="font-disp font-semibold text-[16px] text-ink mb-3">{g.label}</p>
                <Bullets items={g.bullets} />
              </div>
            ))}
          </div>
          <CaseLinks links={dxc.links} />
        </Tile>
      </ol>
    </section>
  )
}
