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
    <div role="group" aria-label="View my work as" className={`flex items-center gap-1 overflow-x-auto ${className}`}>
      <span className="shrink-0 text-[13px] text-fog mr-2">View as</span>
      {LENSES.map((l) => {
        const on = lens === l.id
        return (
          <button
            key={l.id}
            type="button"
            onClick={() => setLens(l.id)}
            aria-pressed={on}
            className={`shrink-0 inline-flex items-center gap-2 text-[13.5px] font-medium px-3 py-1.5 rounded-full border transition-colors ${
              on ? 'text-white border-transparent' : 'text-ink border-rule bg-white hover:border-ink/40'
            }`}
            style={on ? { backgroundColor: l.color } : undefined}
          >
            {l.id !== 'all' && (
              <span aria-hidden="true" className="w-2 h-2 rounded-full" style={{ backgroundColor: on ? '#fff' : l.color }} />
            )}
            {l.label}
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
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-rule">
      <nav aria-label="Main" className="h-14 max-w-page mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#home" className="font-disp font-bold text-[17px] text-ink tracking-[-0.01em]">
          Vamshi Krishna Balupari
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`text-[14px] px-3 py-1.5 rounded-md transition-colors ${active === l.id ? 'text-ink font-medium' : 'text-fog hover:text-ink'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="w-9 h-9 rounded-lg border border-rule flex items-center justify-center text-ink hover:border-ink transition-colors"
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
          className="md:hidden w-11 h-11 -mr-2 rounded-lg flex items-center justify-center text-ink"
        >
          {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-rule bg-white">
          <ul className="px-5 py-2">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block py-3 text-[16px] text-ink border-b border-rule last:border-0">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-3 text-[16px] text-ink">
                <GitHubIcon className="w-5 h-5" /> GitHub <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="border-t border-rule">
        <LensSwitch className="max-w-page mx-auto px-5 md:px-8 h-12" />
      </div>
    </header>
  )
}
