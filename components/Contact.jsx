'use client'
// Contact band with the particle field (after the reference portfolio), then the footer.
import { Particles } from './Ambient'
import { Button, Icon, SectionTitle } from './ui'
import { PROFILE } from '../data/content'

const ITEMS = [
  { icon: 'phone', label: 'Phone', value: '+1 (660) 493-5399', href: 'tel:+16604935399' },
  { icon: 'mail', label: 'Email', value: 'vamshikrishnabalupari@gmail.com', href: 'mailto:vamshikrishnabalupari@gmail.com' },
]

export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-20 md:py-28 overflow-hidden border-t border-tint/[0.06]" aria-labelledby="contact-title">
      <div className="absolute inset-0 bg-[rgb(var(--bg)/.55)]" aria-hidden="true" />
      <Particles density={16000} max={70} />
      <div className="relative max-w-page mx-auto px-5 md:px-8">
        <SectionTitle
          id="contact-title"
          ghost="CONTACT"
          title="Contact me"
          sub="I’m looking for software engineering roles. Email is the fastest way to reach me."
        />
        <ul className="grid md:grid-cols-2 gap-4 max-w-[720px] mx-auto">
          {ITEMS.map((it) => {
            const body = (
              <>
                <span className="grid place-items-center w-12 h-12 rounded-2xl grad-bg mx-auto"><Icon name={it.icon} className="w-5 h-5" /></span>
                <p className="mt-4 text-[13px] text-muted">{it.label}</p>
                <p className="mt-1 text-[15.5px] font-medium break-all">{it.value}</p>
                {it.note && <p className="mt-1 text-[12.5px] text-muted">{it.note}</p>}
              </>
            )
            return (
              <li key={it.label}>
                {it.href ? (
                  <a href={it.href} className="block h-full text-center glass rounded-3xl p-7 hover:bg-tint/[0.07] transition">{body}</a>
                ) : (
                  <div className="h-full text-center glass rounded-3xl p-7">{body}</div>
                )}
              </li>
            )
          })}
        </ul>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${PROFILE.email}`} variant="grad" icon="mail">Email me</Button>
          <Button href={PROFILE.linkedin} icon="linkedin">LinkedIn</Button>
          <Button href={PROFILE.github} icon="github">GitHub</Button>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-tint/[0.06] py-8">
      <div className="max-w-page mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13.5px] text-muted">
        <p>Designed and built by Vamshi Krishna Balupari. Next.js, deployed on Vercel.</p>
        <a href="#home" className="inline-flex items-center gap-2 hover:text-ink"><Icon name="up" className="w-4 h-4" /> Back to top</a>
      </div>
    </footer>
  )
}
