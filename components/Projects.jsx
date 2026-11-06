import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Chip, LinkButton } from './ui'
import { PROJECTS } from '../data/content'

const ROWS = [
  ['problem', 'Problem'],
  ['build', 'Built'],
  ['decision', 'Key decision'],
  ['impact', 'Impact'],
]

export default function Projects() {
  return (
    <section id="projects" className="px-5 md:px-8 py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto">
        <SectionHead
          tag="More projects"
          title="Other builds"
          sub="Pipelines, analytics apps, and modeling work, each with its code on GitHub."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06} className="h-full">
              <article className="h-full flex flex-col bg-white border border-line rounded-[20px] p-6 hover:border-indigo/35 hover:-translate-y-1 hover:shadow-[0_18px_44px_-24px_rgba(25,24,35,.18)] transition-all">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span
                    className={`font-mono text-[11px] tracking-[.06em] uppercase px-2.5 py-1 rounded-full border ${
                      p.status === 'In progress'
                        ? 'bg-amberx/10 border-amberx/25 text-amberx'
                        : 'bg-tealx/10 border-tealx/25 text-tealx'
                    }`}
                  >
                    {p.status}
                  </span>
                  <span className="font-mono text-[12px] text-soft">{p.year}</span>
                </div>

                <h3 className="font-disp font-semibold text-[20px] text-ink leading-tight mb-4">{p.title}</h3>

                <dl className="space-y-3 flex-1 mb-5">
                  {ROWS.map(([key, label]) => (
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
