'use client'
import { AI_WORKFLOW } from '../data/content'
import { SectionHead, Tile, Eyebrow, ArrowIcon } from './ui'

export default function BuildWithAI() {
  return (
    <section id="build-with-ai" aria-labelledby="ai-title" className="max-w-page mx-auto px-4 md:px-8 pt-16 md:pt-24">
      <SectionHead id="ai-title" title="How I build with AI" intro={AI_WORKFLOW.intro} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <Tile className="sm:col-span-2 lg:row-span-2 bg-white p-6 md:p-8">
          <Eyebrow>the workflow</Eyebrow>
          <ol className="mt-5 space-y-3">
            {AI_WORKFLOW.steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[44px_1fr] gap-4 items-start">
                <span className="w-11 h-11 rounded-xl lens-bg text-white flex items-center justify-center font-disp font-bold text-[17px]">{i + 1}</span>
                <div className="pt-0.5">
                  <p className="font-disp font-semibold text-[16.5px] text-ink">{s.title}</p>
                  <p className="mt-0.5 text-[14.5px] leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Tile>

        <Tile delay={0.05} className="sm:col-span-2 bg-white p-6 md:p-7">
          <Eyebrow>SDKs and models I have shipped with</Eyebrow>
          <dl className="mt-4 grid sm:grid-cols-2 gap-2.5">
            {AI_WORKFLOW.sdks.map((s) => (
              <div key={s.name} className="bg-chip rounded-xl px-4 py-3">
                <dt className="font-mono text-[13px] font-medium text-ink">{s.name}</dt>
                <dd className="text-[13.5px] text-slate mt-0.5 leading-snug">{s.use}</dd>
              </div>
            ))}
          </dl>
        </Tile>

        <Tile delay={0.1} className="sm:col-span-2 bg-night p-6 md:p-7">
          <Eyebrow className="lens-text-dark">LLM features I have built</Eyebrow>
          <ul className="mt-4 divide-y divide-white/10">
            {AI_WORKFLOW.shipped.map((s) => (
              <li key={s.name}>
                <a href={s.href} className="group flex items-center justify-between gap-4 py-3.5">
                  <span>
                    <span className="block text-[15.5px] font-medium text-white">{s.name}</span>
                    <span className="block text-[13.5px] text-[#9AA3B2]">{s.where}</span>
                  </span>
                  <ArrowIcon className="w-4 h-4 text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </a>
              </li>
            ))}
          </ul>
        </Tile>
      </div>
    </section>
  )
}
