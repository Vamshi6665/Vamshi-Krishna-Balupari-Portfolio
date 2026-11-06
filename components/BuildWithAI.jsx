import { AI_WORKFLOW } from '../data/content'
import { SectionHead } from './ui'

export default function BuildWithAI() {
  return (
    <section id="build-with-ai" aria-labelledby="ai-title" className="bg-mist border-y border-rule py-20 md:py-28">
      <div className="max-w-page mx-auto px-5 md:px-8">
        <SectionHead id="ai-title" title="How I build with AI" intro={AI_WORKFLOW.intro} />

        <div className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 lg:gap-16">
          <ol className="space-y-0">
            {AI_WORKFLOW.steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-rule first:border-t-0 first:pt-0">
                <span className="font-disp font-bold text-[26px] leading-none text-gi">{i + 1}</span>
                <div>
                  <p className="font-semibold text-[17px] text-ink">{s.title}</p>
                  <p className="mt-1 text-[15.5px] leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="space-y-8">
            <div className="bg-white border border-rule rounded-[14px] p-6">
              <h3 className="font-disp font-semibold text-[19px] text-ink mb-4">SDKs and models I&apos;ve shipped with</h3>
              <dl className="divide-y divide-rule">
                {AI_WORKFLOW.sdks.map((s) => (
                  <div key={s.name} className="py-3 first:pt-0 last:pb-0">
                    <dt className="font-mono text-[13.5px] font-medium text-ink">{s.name}</dt>
                    <dd className="text-[14.5px] text-slate mt-0.5">{s.use}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-white border border-rule rounded-[14px] p-6">
              <h3 className="font-disp font-semibold text-[19px] text-ink mb-4">LLM features I&apos;ve built</h3>
              <ul className="divide-y divide-rule">
                {AI_WORKFLOW.shipped.map((s) => (
                  <li key={s.name} className="py-3 first:pt-0 last:pb-0">
                    <a href={s.href} className="group block">
                      <span className="block text-[15px] font-medium text-ink group-hover:text-gi transition-colors">{s.name}</span>
                      <span className="block text-[14px] text-fog">{s.where}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
