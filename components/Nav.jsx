'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROFILE } from '../data/content'
import { GitHubIcon, MenuIcon, CloseIcon } from './ui'

const LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Work', id: 'work' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Highlight the section currently in the upper part of the viewport.
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' },
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-bg/85 border-b transition-colors ${scrolled || open ? 'border-line' : 'border-transparent'}`}
    >
      <nav aria-label="Main" className="h-16 max-w-[1120px] mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#home" className="font-disp font-bold text-[18px] text-ink" aria-label="Back to top">
          Vamshi<span className="text-grad">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`text-[14px] font-medium px-3.5 py-2 rounded-lg transition-colors ${active === l.id ? 'text-indigo bg-indigo/10' : 'text-soft hover:text-indigo hover:bg-indigo/5'}`}
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
              className="w-10 h-10 rounded-xl border-[1.5px] border-line bg-white flex items-center justify-center text-soft hover:border-indigo hover:text-indigo transition-colors"
            >
              <GitHubIcon className="w-[18px] h-[18px]" />
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden w-11 h-11 -mr-1.5 rounded-xl flex items-center justify-center text-ink hover:bg-indigo/5"
        >
          {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-line bg-bg"
          >
            <ul className="px-5 py-3">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-[16px] font-medium border-b border-line/70 ${active === l.id ? 'text-indigo' : 'text-ink'}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-3 text-[16px] font-medium text-ink"
                >
                  <GitHubIcon className="w-5 h-5" /> GitHub <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
