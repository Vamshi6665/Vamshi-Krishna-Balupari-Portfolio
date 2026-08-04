import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import DeepDives from '../components/DeepDives'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Experience />
      <DeepDives />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
