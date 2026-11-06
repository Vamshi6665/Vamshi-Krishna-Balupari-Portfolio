import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-ink focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
