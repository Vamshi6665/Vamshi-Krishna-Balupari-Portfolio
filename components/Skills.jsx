'use client'
import { SKILLS, CREDENTIALS } from '../data/content'
import { useLens, lensColor } from './lens'
import { SectionHead } from './ui'

export default function Skills() {
  const { lens } = useLens()
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-mist border-y border-rule py-20 md:py-28">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <SectionHead
          id="skills-title"
          title="Skills and credentials"
          intro={lens === 'all' ? 'Grouped by role. Pick a view above to bring one group forward.' : 'The group for your selected view is highlighted.'}
        />

        <div className="divide-y divide-rule border-y border-rule">
          {SKILLS.map((g) => {
            const focus = lens === 'all' || g.lens === lens || g.lens === 'all'
            const color = g.lens === 'all' ? '#10192B' : lensColor(g.lens)
            return (
              <div key={g.name} className={`grid md:grid-cols-[220px_1fr] gap-3 md:gap-10 py-6 transition-opacity ${focus ? 'opacity-100' : 'opacity-45'}`}>
                <h3 className="flex items-center gap-2.5 font-disp font-semibold text-[18px] text-ink">
                  <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                  {g.name}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="text-[14px] text-ink bg-white border border-rule rounded-lg px-3 py-1.5">{s}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-12 grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6">
          <div className="bg-white border border-rule rounded-[14px] p-6">
            <p className="text-[14px] text-fog">Education</p>
            <p className="mt-1 font-disp font-bold text-[22px] text-ink leading-tight">{CREDENTIALS.degree.name}</p>
            <p className="mt-1 text-[15px]">{CREDENTIALS.degree.school}</p>
            <p className="mt-3 text-[15px] text-ink"><span className="font-semibold">{CREDENTIALS.degree.detail}</span> <span className="text-fog">({CREDENTIALS.degree.dates})</span></p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {CREDENTIALS.certs.map((c) => (
              <li key={c.code} className="bg-white border border-rule rounded-[14px] p-5 flex items-center gap-4">
                <span className="shrink-0 w-14 h-14 rounded-xl border border-rule flex items-center justify-center font-mono text-[12px] font-medium text-ink">{c.code}</span>
                <span>
                  <span className="block text-[15px] font-medium text-ink leading-snug">{c.name}</span>
                  <span className="block text-[13.5px] text-fog">{c.org}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
