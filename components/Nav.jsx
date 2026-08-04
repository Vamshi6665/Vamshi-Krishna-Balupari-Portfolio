'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = ['Home', 'Experience', 'Featured Work', 'Projects', 'Skills', 'Certifications', 'Contact']
const ids = { Home: 'home', Experience: 'experience', 'Featured Work': 'deepdives', Projects: 'projects', Skills: 'skills', Certifications: 'certifications', Contact: 'contact' }

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      let cur = 'home'
      document.querySelectorAll('section[id]').forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) cur = s.id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 backdrop-blur-xl bg-bg/85 border-b transition-colors ${scrolled ? 'border-line' : 'border-transparent'}`}
    >
      <a href="#home" className="font-disp font-bold text-[17px] text-ink">
        Vamshi<span className="text-grad">.</span>
      </a>
      <ul className="hidden md:flex gap-0.5">
        {LINKS.map((l) => (
          <li key={l}>
            <a
              href={`#${ids[l]}`}
              className={`text-[13.5px] font-medium px-3.5 py-1.5 rounded-lg transition-colors ${active === ids[l] ? 'text-indigo bg-indigo/10' : 'text-soft hover:text-indigo hover:bg-indigo/5'}`}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
