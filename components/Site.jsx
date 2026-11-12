'use client'
import { useCallback, useEffect, useState } from 'react'
import { LENSES } from '../data/content'
import { LensContext, lensColor, lensDark } from './lens'
import Nav from './Nav'
import Hero from './Hero'
import Work from './Work'
import BuildWithAI from './BuildWithAI'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

const VALID = new Set(LENSES.map((l) => l.id))

export default function Site() {
  const [lens, setLensState] = useState('all')
  const [pending, setPending] = useState(null)

  // A shareable link like ?role=de opens the site in that lens.
  useEffect(() => {
    const role = new URLSearchParams(window.location.search).get('role')
    if (role && VALID.has(role)) setLensState(role)
  }, [])

  const setLens = useCallback((id) => {
    setLensState(id)
    const url = new URL(window.location.href)
    if (id === 'all') url.searchParams.delete('role')
    else url.searchParams.set('role', id)
    window.history.replaceState(null, '', url)
  }, [])

  // A link to a case study hidden by the current lens switches back to "All" first, then scrolls to it.
  const onClickCapture = useCallback((e) => {
    const a = e.target.closest?.('a[href^="#case-"]')
    if (!a) return
    const id = a.getAttribute('href').slice(1)
    if (document.getElementById(id)) return
    e.preventDefault()
    setLens('all')
    setPending(id)
  }, [setLens])

  useEffect(() => {
    if (!pending) return
    const el = document.getElementById(pending)
    if (el) {
      window.location.hash = pending
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setPending(null)
    }
  }, [pending, lens])

  return (
    <LensContext.Provider value={{ lens, setLens }}>
      <div className="lens-root" style={{ '--lens': lensColor(lens), '--lens-dark': lensDark(lens) }} onClickCapture={onClickCapture}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-night focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Hero />
          <Work />
          <BuildWithAI />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </LensContext.Provider>
  )
}
