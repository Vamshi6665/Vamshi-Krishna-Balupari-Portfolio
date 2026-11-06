import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { Rich, Chip, LinkButton } from './ui'
import { CASE_STUDIES } from '../data/content'

const TONES = {
  teal: 'bg-tealx/10 border-tealx/25 text-tealx',
  indigo: 'bg-indigo/10 border-indigo/25 text-indigo',
  rose: 'bg-rosex/10 border-rosex/25 text-rosex',
}

function Label({ n, children }) {
  return (
    <h4 className="flex items-center gap-2.5 font-mono text-[12px] tracking-[.1em] uppercase text-soft mb-4">
      <span className="text-indigo">{n}</span>
      <span>{children}</span>
      <span className="flex-1 h-px bg-line" aria-hidden="true" />
    </h4>
  )
}

function CaseStudy({ cs }) {
  return (
    <article
      id={`case-${cs.id}`}
      aria-labelledby={`case-${cs.id}-title`}
      className="bg-white border border-line rounded-[24px] overflow-hidden hover:shadow-[0_24px_60px_-30px_rgba(25,24,35,.2)] transition-shadow"
    >
      {/* Header */}
      <header className="px-5 md:px-10 pt-7 md:pt-10 pb-7 border-b border-line bg-gradient-to-br from-white to-[#faf9ff]">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className={`inline-flex items-center font-mono text-[11.5px] tracking-[.06em] uppercase px-3 py-1 rounded-full border ${TONES[cs.tone]}`}>
            {cs.badge}
          </span>
          <span className="font-mono text-[12px] text-soft">{cs.year}</span>
        </div>
        <h3 id={`case-${cs.id}-title`} className="font-disp font-bold text-[28px] md:text-[34px] leading-tight tracking-tight text-ink mb-3">
          {cs.title}
        </h3>
        <p className="text-[17px] md:text-[18px] leading-relaxed text-ink/80 max-w-[720px] mb-6">{cs.hook}</p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 mb-7">
          {cs.links.map((l) => (
            <LinkButton key={l.href} href={l.href} primary={l.primary} className="w-full sm:w-auto">{l.label}</LinkButton>
          ))}
        </div>

        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-3 max-w-[760px]">
          {cs.meta.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-[11px] tracking-[.1em] uppercase text-soft">{m.label}</dt>
              <dd className="text-[14.5px] text-ink mt-0.5">{m.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="px-5 md:px-10 py-8 md:py-10 space-y-10">
        {/* 01 + 02 */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <section>
            <Label n="01">Overview and problem</Label>
            <div className="space-y-3.5 text-[15.5px] leading-relaxed">
              {cs.overview.map((p) => <p key={p}><Rich text={p} /></p>)}
            </div>
          </section>

          <section>
            <Label n="02">Architecture and workflow</Label>
            <ol className="space-y-4">
              {cs.workflow.map((w, i) => (
                <li key={w.step} className="relative pl-10">
                  {i < cs.workflow.length - 1 && (
                    <span aria-hidden="true" className="absolute left-[13px] top-[27px] -bottom-4 w-px bg-indigo/20" />
                  )}
                  <span className="absolute left-0 top-0 w-[27px] h-[27px] rounded-full bg-white border-[1.5px] border-indigo/30 flex items-center justify-center font-mono text-[11px] text-indigo">
                    {i + 1}
                  </span>
                  <p className="font-disp font-semibold text-[15px] text-ink leading-[27px]">{w.step}</p>
                  <p className="text-[14.5px] leading-relaxed">{w.text}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* 03 */}
        <section>
          <Label n="03">Key decisions and trade-offs</Label>
          <div className="grid md:grid-cols-3 gap-3">
            {cs.decisions.map((d) => (
              <div key={d.title} className="flex flex-col rounded-2xl border border-line bg-[#fbfaf8] p-4 md:p-5">
                <p className="font-disp font-semibold text-[16px] text-ink mb-2">{d.title}</p>
                <p className="text-[14.5px] leading-relaxed mb-3">{d.why}</p>
                <p className="mt-auto text-[14px] leading-relaxed pt-3 border-t border-line">
                  <span className="font-mono text-[11px] tracking-[.1em] uppercase text-amberx mr-1.5">Trade-off</span>
                  {d.tradeoff}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 04 */}
        <section>
          <Label n="04">Impact</Label>
          <dl className={`grid grid-cols-2 ${cs.impact.metrics.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-3 mb-5`}>
            {cs.impact.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse justify-end gap-2 rounded-2xl bg-grad-soft border border-indigo/15 px-4 py-4">
                <dt className="text-[13px] leading-snug text-body">{m.label}</dt>
                <dd className="font-disp font-bold text-[26px] md:text-[30px] leading-none text-grad">{m.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[15.5px] leading-relaxed text-ink max-w-[760px]">{cs.impact.summary}</p>
        </section>

        {/* Optional screenshots */}
        {cs.shots?.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4">
            {cs.shots.map((s) => (
              <figure key={s.src} className="rounded-2xl border border-line overflow-hidden bg-[#f4f3f0]">
                <img src={s.src} alt={s.alt} loading="lazy" className="w-full aspect-[16/10] object-cover object-top" />
                <figcaption className="px-4 py-2.5 text-[13px] text-soft border-t border-line bg-white">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 pt-6 border-t border-line">
          {cs.stack.map((s) => <Chip key={s}>{s}</Chip>)}
        </div>
      </div>
    </article>
  )
}

export default function CaseStudies() {
  return (
    <section id="work" className="px-5 md:px-8 py-16 md:py-24 bg-gradient-to-b from-[#f5f3ff] to-bg">
      <div className="max-w-[1120px] mx-auto">
        <SectionHead
          tag="Featured work"
          title="Case studies"
          sub="Three projects in depth: the problem, how I built it, the trade-offs I chose, and what changed."
        />
        <div className="space-y-8">
          {CASE_STUDIES.map((cs) => (
            <Reveal key={cs.id}><CaseStudy cs={cs} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
