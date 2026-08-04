import Reveal from './Reveal'

export default function SectionHead({ tag, title, sub }) {
  return (
    <>
      <Reveal><p className="font-mono text-xs text-indigo tracking-[.1em] uppercase mb-2.5">{tag}</p></Reveal>
      <Reveal delay={0.06}><h2 className="font-disp font-bold text-ink text-3xl md:text-[40px] tracking-tight mb-2.5">{title}</h2></Reveal>
      {sub && <Reveal delay={0.12}><p className="text-[15.5px] text-soft max-w-[560px] mb-13" style={{ marginBottom: '52px' }}>{sub}</p></Reveal>}
    </>
  )
}
