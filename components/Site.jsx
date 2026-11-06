'use client'
import { useCallback, useEffect, useState } from 'react'
import { LENSES } from '../data/content'
import { LensContext, lensColor } from './lens'
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

  return (
    <LensContext.Provider value={{ lens, setLens }}>
      <div className="lens-root" style={{ '--lens': lensColor(lens) }}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
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
