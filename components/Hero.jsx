'use client'
// Full-screen opening: particle network over the gradient mesh, the name, a typed line, and the apps that are live right now.
import { useEffect, useState } from 'react'
import { Particles } from './Ambient'
import { Button } from './ui'
import { ABOUT, PROJECTS } from '../data/projects'

function Typed({ words }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState(words[0])
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const word = words[i % words.length]
    let t
    if (!deleting && text === word) t = setTimeout(() => setDeleting(true), 1900)
    else if (deleting && text === '') { setDeleting(false); setI((n) => n + 1) }
    else t = setTimeout(() => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)), deleting ? 32 : 62)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])
  return (
    <>
      <span className="sr-only">{words.join(' ')}</span>
      <span aria-hidden="true" className="grad-text">{text}</span>
      <span aria-hidden="true" className="caret" />
    </>
  )
}

export default function Hero() {
  const live = PROJECTS.filter((p) => p.live)
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden" aria-labelledby="hero-name">
      <Particles className="[mask-image:radial-gradient(ellipse_62%_55%_at_50%_48%,transparent_35%,black_80%)]" />
      <div className="relative z-10 w-full max-w-page mx-auto px-5 md:px-8 pt-28 pb-16 text-center">
        <p className="rise text-muted text-[15px] md:text-[16px]" style={{ '--d': '.05s' }}>
          {ABOUT.headline} in Houston, TX
        </p>
        <h1 id="hero-name" className="rise mt-5 font-disp font-bold leading-[0.95] tracking-[-0.035em] text-[clamp(42px,8.4vw,112px)]" style={{ '--d': '.15s' }}>
          <span className="name-sheen">Vamshi Krishna<br />Balupari</span>
        </h1>
        <p className="rise mt-7 font-disp font-medium text-[clamp(20px,2.6vw,32px)] tracking-[-0.01em] min-h-[1.4em]" style={{ '--d': '.35s' }}>
          I build <Typed words={ABOUT.typed} />
        </p>
        <p className="rise mt-5 mx-auto max-w-[60ch] text-muted text-[16.5px] md:text-[17.5px] leading-relaxed" style={{ '--d': '.45s' }}>
          {ABOUT.intro}
        </p>
        <div className="rise mt-9 flex flex-wrap justify-center gap-3" style={{ '--d': '.55s' }}>
          <Button href="#projects" variant="grad">See my projects</Button>
          <Button href="#contact" variant="glass">Get in touch</Button>
        </div>

        <div className="rise mt-14 md:mt-16" style={{ '--d': '.75s' }}>
          <p className="text-[13.5px] text-muted mb-3 flex items-center justify-center gap-2">
            <span className="pulse" aria-hidden="true" /> Live right now. Click one to try it.
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {live.map((p) => (
              <li key={p.id}>
                <a
                  href={p.live.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-9 pl-3 pr-3.5 rounded-full glass text-[13.5px] hover:border-white/25 hover:bg-white/[0.08] transition"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-live" aria-hidden="true" />
                  {p.title}
                  <span className="sr-only">(opens the live app in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:grid place-items-center w-7 h-11 rounded-full border border-white/25">
        <span className="w-1 h-2 rounded-full bg-white/70 animate-bounce" />
      </a>
    </section>
  )
}
