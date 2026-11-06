import { Fragment } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Rich } from './ui'
import { ABOUT } from '../data/content'

export default function About() {
  return (
    <section id="about" className="px-5 md:px-8 py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto">
        <SectionHead tag="About" title={ABOUT.title} />

        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-14">
          <Reveal>
            <div className="space-y-4 text-[16px] leading-relaxed max-w-[620px]">
              {ABOUT.paragraphs.map((p) => (
                <p key={p}><Rich text={p} /></p>
              ))}
            </div>

            <dl className="mt-8 grid sm:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
              {ABOUT.facts.map((f) => (
                <div key={f.label} className="bg-white px-4 py-4">
                  <dt className="font-mono text-[11px] tracking-[.1em] uppercase text-soft mb-1.5">{f.label}</dt>
                  <dd className="text-[14px] font-medium text-ink leading-snug">
                    {f.value.split(' · ').map((v, vi) => (
                      <Fragment key={v}>
                        {vi > 0 && ' · '}
                        <span className="whitespace-nowrap">{v}</span>
                      </Fragment>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="grid gap-3">
            {ABOUT.pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.06 * i}>
                <div className="bg-white border border-line rounded-2xl p-5 md:p-6 hover:border-indigo/30 transition-colors">
                  <h3 className="font-disp font-semibold text-[17px] text-ink mb-1.5 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-[3px] bg-grad" aria-hidden="true" />
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
