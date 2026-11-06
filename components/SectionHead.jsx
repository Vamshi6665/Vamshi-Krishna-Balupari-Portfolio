import Reveal from './Reveal'

export default function SectionHead({ tag, title, sub }) {
  return (
    <div className="mb-10 md:mb-14">
      <Reveal>
        <p className="font-mono text-[12px] text-indigo tracking-[.12em] uppercase mb-3">{tag}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-disp font-bold text-ink text-[32px] leading-tight md:text-[42px] tracking-tight [text-wrap:balance]">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className="text-[16px] text-soft max-w-[600px] mt-3 leading-relaxed">{sub}</p>
        </Reveal>
      )}
    </div>
  )
}
