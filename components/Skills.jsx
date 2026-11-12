'use client'
import { SKILLS, CREDENTIALS } from '../data/content'
import { useLens, lensColor } from './lens'
import { SectionHead, Tile, Eyebrow } from './ui'

export default function Skills() {
  const { lens } = useLens()
  return (
    <section id="skills" aria-labelledby="skills-title" className="max-w-page mx-auto px-4 md:px-8 pt-16 md:pt-24">
      <SectionHead
        id="skills-title"
        title="Skills and credentials"
        intro={lens === 'all' ? 'Grouped by role. Pick a role above to bring one group forward.' : 'The group for your selected role is in front.'}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-3.5">
        {SKILLS.map((g, i) => {
          const focus = lens === 'all' || g.lens === lens || g.lens === 'all'
          const color = g.lens === 'all' ? '#11151C' : lensColor(g.lens)
          const wide = g.items.length > 12
          const last = i === SKILLS.length - 1
          const span = wide || last ? 'sm:col-span-2' : ''
          return (
            <Tile
              key={g.name}
              delay={Math.min(i * 0.04, 0.2)}
              className={`bg-white p-6 tile-lift ${span} ${focus ? '' : 'opacity-[.38]'}`}
            >
              <h3 className="flex items-center gap-2.5 font-disp font-semibold text-[17px] text-ink">
                <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                {g.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="text-[13.5px] text-ink bg-chip rounded-lg px-2.5 py-1.5">{s}</li>
                ))}
              </ul>
            </Tile>
          )
        })}

        <Tile delay={0.1} className="bg-night p-6 md:p-7 text-[#C5CBD6]">
          <Eyebrow className="lens-text-dark">education</Eyebrow>
          <p className="mt-4 font-disp font-bold text-[22px] text-white leading-tight">{CREDENTIALS.degree.name}</p>
          <p className="mt-1 text-[15px]">{CREDENTIALS.degree.school}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-[14px] text-white bg-white/10 rounded-full px-3 py-1.5">
            <span className="font-semibold">{CREDENTIALS.degree.detail}</span> <span className="text-white/70">{CREDENTIALS.degree.dates}</span>
          </p>
        </Tile>

        <Tile delay={0.15} className="sm:col-span-2 lg:col-span-4 bg-white p-6 md:p-7">
          <Eyebrow>certifications</Eyebrow>
          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {CREDENTIALS.certs.map((c) => (
              <li key={c.code} className="bg-chip rounded-xl p-3.5 flex items-center gap-3">
                <span className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center font-mono text-[11.5px] font-medium text-ink">{c.code}</span>
                <span>
                  <span className="block text-[14px] font-medium text-ink leading-snug">{c.name}</span>
                  <span className="block text-[13px] text-fog">{c.org}</span>
                </span>
              </li>
            ))}
          </ul>
        </Tile>
      </div>
    </section>
  )
}
