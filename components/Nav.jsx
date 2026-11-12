'use client'
import { useEffect, useState } from 'react'
import { PROFILE, LENSES } from '../data/content'
import { useLens } from './lens'
import { GitHubIcon, MenuIcon, CloseIcon } from './ui'

const LINKS = [
  { label: 'Work', id: 'work' },
  { label: 'How I build', id: 'build-with-ai' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export function LensSwitch({ className = '' }) {
  const { lens, setLens } = useLens()
  return (
    <div role="group" aria-label="View my work as" className={`flex items-center gap-1 p-[5px] bg-white rounded-full shadow-[0_1px_0_rgba(17,21,28,.06)] ${className}`}>
      {LENSES.map((l) => {
        const on = lens === l.id
        return (
          <button
            key={l.id}
            type="button"
            onClick={() => setLens(l.id)}
            aria-pressed={on}
            title={l.label}
            className={`shrink-0 min-h-[38px] px-3.5 rounded-full text-[14px] transition-colors ${
              on ? 'text-white font-semibold' : 'text-[#3A414D] font-medium hover:bg-chip'
            }`}
            style={on ? { backgroundColor: l.color } : undefined}
          >
            {l.short}
          </button>
        )
      })}
    </div>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-ground/85 backdrop-blur-xl">
      <nav aria-label="Main" className="max-w-page mx-auto px-4 md:px-8 h-[72px] flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <span aria-hidden="true" className="w-[42px] h-[42px] rounded-xl bg-night text-white flex items-center justify-center font-disp font-bold text-[15px]">VK</span>
          <span>
            <span className="block font-disp font-semibold text-[16px] leading-tight text-ink">{PROFILE.name}</span>
            <span className="block text-[13px] text-fog">{PROFILE.location}</span>
          </span>
        </a>

        <LensSwitch className="hidden xl:flex" />

        <ul className="hidden lg:flex items-center gap-0.5">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`text-[14px] px-2.5 py-2 rounded-lg transition-colors ${active === l.id ? 'text-ink font-semibold' : 'text-fog hover:text-ink'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-1.5">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-ink hover:bg-night hover:text-white transition-colors"
            >
              <GitHubIcon className="w-[17px] h-[17px]" />
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden w-11 h-11 rounded-xl bg-white flex items-center justify-center text-ink"
        >
          {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </nav>

      {/* On smaller screens the role switcher gets its own scrollable row. */}
      <div className="xl:hidden max-w-page mx-auto px-4 md:px-8 pb-3 overflow-x-auto">
        <LensSwitch className="w-max" />
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden max-w-page mx-auto px-4 md:px-8 pb-4">
          <ul className="bg-white rounded-tile p-2">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl text-[16px] text-ink hover:bg-chip">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 rounded-xl text-[16px] text-ink hover:bg-chip">
                <GitHubIcon className="w-5 h-5" /> GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
