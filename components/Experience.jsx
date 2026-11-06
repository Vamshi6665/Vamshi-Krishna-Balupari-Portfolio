import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Rich, Chip } from './ui'
import { EXPERIENCE } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="px-5 md:px-8 py-16 md:py-24 bg-gradient-to-b from-bg via-[#f6f4ff] to-bg">
      <div className="max-w-[1120px] mx-auto">
        <SectionHead
          tag="Experience"
          title="Where I've worked"
          sub="Enterprise analytics at DXC, research at Northwest Missouri State, and production data tools today."
        />

        <ol className="relative md:pl-10 md:before:absolute md:before:left-[11px] md:before:top-3 md:before:bottom-3 md:before:w-px md:before:bg-line">
          {EXPERIENCE.map((job, i) => (
            <li key={job.org} className="relative mb-5 last:mb-0">
              <span
                aria-hidden="true"
                className="hidden md:block absolute -left-10 top-8 w-[23px] h-[23px] rounded-full bg-bg border-2 border-indigo/40 after:absolute after:inset-[5px] after:rounded-full after:bg-grad"
              />
              <Reveal delay={i * 0.05}>
                <article className="group bg-white border border-line rounded-[20px] p-6 md:p-8 hover:border-indigo/30 hover:shadow-[0_16px_40px_-22px_rgba(25,24,35,.16)] transition-all">
                  <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-4">
                    <div>
                      <h3 className="font-disp font-semibold text-[21px] text-ink leading-tight">{job.role}</h3>
                      <p className="font-disp font-medium text-[15px] text-grad mt-1">
                        {job.org} <span className="text-soft">· {job.location}</span>
                      </p>
                    </div>
                    <p className="font-mono text-[12.5px] text-soft whitespace-nowrap sm:pt-1">{job.dates}</p>
                  </header>

                  {job.groups.map((g, gi) => (
                    <div key={gi} className={gi > 0 ? 'mt-5' : ''}>
                      {g.label && (
                        <p className="font-mono text-[11.5px] text-amberx tracking-[.1em] uppercase mb-2">{g.label}</p>
                      )}
                      <ul className="space-y-2">
                        {g.bullets.map((b) => (
                          <li key={b} className="text-[15px] leading-relaxed pl-5 relative">
                            <span aria-hidden="true" className="absolute left-0 top-[0.62em] w-1.5 h-1.5 rounded-full bg-indigo/70" />
                            <Rich text={b} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {job.note && <p className="mt-5 text-[14px] text-soft italic">{job.note}</p>}

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {job.chips.map((c) => <Chip key={c} variant="accent">{c}</Chip>)}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
