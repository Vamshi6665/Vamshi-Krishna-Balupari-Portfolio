import { EXPERIENCE } from '../data/content'
import { Rich, SectionHead } from './ui'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="py-20 md:py-28">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <SectionHead id="exp-title" title="Experience" intro="Four-plus years of data engineering and analytics, from enterprise clients to a business I support today." />
        <ol>
          {EXPERIENCE.map((job) => (
            <li key={job.org} className="grid md:grid-cols-[220px_1fr] gap-3 md:gap-10 py-10 border-t border-rule">
              <div className="text-[14.5px] text-fog">
                <p className="text-ink font-medium">{job.dates}</p>
                <p>{job.location}</p>
              </div>
              <div>
                <h3 className="font-disp font-bold text-[24px] md:text-[28px] leading-tight tracking-[-0.015em] text-ink">{job.role}</h3>
                <p className="text-[16px] text-slate mt-1">{job.org}</p>

                {job.groups.map((g, gi) => (
                  <div key={gi} className="mt-5">
                    {g.label && <p className="text-[14.5px] font-semibold text-ink mb-2">{g.label}</p>}
                    <ul className="space-y-2">
                      {g.bullets.map((b) => (
                        <li key={b} className="relative pl-5 text-[15.5px] leading-relaxed">
                          <span aria-hidden="true" className="absolute left-0 top-[0.65em] w-2 h-[2px] rounded lens-bg" />
                          <Rich text={b} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {job.note && <p className="mt-4 text-[14.5px] text-fog">{job.note}</p>}

                {job.links && (
                  <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14.5px]">
                    <span className="text-fog">Case studies:</span>
                    {job.links.map((l) => (
                      <a key={l.href} href={l.href} className="text-ink font-medium underline decoration-rule underline-offset-4 hover:decoration-ink">
                        {l.label}
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
