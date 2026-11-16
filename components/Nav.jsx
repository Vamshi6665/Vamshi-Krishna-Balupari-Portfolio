'use client'
// Sticky navigation: name on the left, section links with a live "you are here" state, and the palette switcher.
import { useEffect, useState } from 'react'
import { Icon } from './ui'

export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'clients', label: 'Clients' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const PALETTES = [
  { id: 'sunrise', label: 'Sunrise: orange and white', a: '#FF7A00', b: '#FFF1E0' },
  { id: 'lumina', label: 'Lumina: violet and rose', a: '#7C5CFF', b: '#FF5FA2' },
  { id: 'aurora', label: 'Aurora: teal and cyan', a: '#14B8A6', b: '#A3E635' },
  { id: 'ember', label: 'Ember: orange and red', a: '#FF9800', b: '#F43F5E' },
]

function PaletteSwitch() {
  const [current, setCurrent] = useState('sunrise')
  useEffect(() => setCurrent(document.documentElement.dataset.palette || 'sunrise'), [])
  const choose = (id) => {
    document.documentElement.dataset.palette = id
    setCurrent(id)
    try { localStorage.setItem('palette', id) } catch (e) {}
  }
  return (
    <div role="radiogroup" aria-label="Color theme" className="flex items-center gap-1.5 p-1 rounded-full glass">
      {PALETTES.map((p) => (
        <button
          key={p.id}
          type="button"
          role="radio"
          aria-checked={current === p.id}
          aria-label={p.label}
          title={p.label}
          onClick={() => choose(p.id)}
          className={`w-5 h-5 rounded-full transition ${current === p.id ? 'ring-2 ring-tint/80 ring-offset-2 ring-offset-transparent scale-100' : 'opacity-70 hover:opacity-100 scale-90'}`}
          style={{ background: `linear-gradient(135deg, ${p.a}, ${p.b})` }}
        />
      ))}
    </div>
  )
}

export default function Nav() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${scrolled || open ? 'bg-night/80 backdrop-blur-xl border-b border-tint/[0.07]' : 'bg-transparent'}`}>
      <a href="#projects" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 glass rounded-full px-4 py-2 text-sm">Skip to projects</a>
      <nav className="max-w-page mx-auto h-16 px-5 md:px-8 flex items-center justify-between gap-6" aria-label="Main">
        <a href="#home" className="flex items-center gap-3 group" aria-label="Vamshi Krishna Balupari, back to top">
          <span className="grid place-items-center w-9 h-9 rounded-xl grad-bg font-disp font-bold text-[13px]">VK</span>
          <span className="font-disp font-semibold text-[14px] tracking-[0.04em] hidden sm:block">Vamshi Krishna</span>
        </a>
        <ul className="hidden lg:flex items-center gap-1">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? 'true' : undefined}
                className={`relative px-3.5 py-2 rounded-full text-[14px] transition ${active === s.id ? 'text-ink' : 'text-muted hover:text-ink'}`}
              >
                {s.label}
                {active === s.id && <span aria-hidden="true" className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full grad-bg" />}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <PaletteSwitch />
          <button
            type="button"
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full glass"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} className="w-5 h-5" />
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="lg:hidden px-5 pb-5 grid gap-1">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={() => setOpen(false)} className={`block px-4 py-3 rounded-xl text-[16px] ${active === s.id ? 'bg-tint/[0.07] text-ink' : 'text-muted'}`}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
