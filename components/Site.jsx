// Page order follows the reference portfolio: Home, About, Projects, Clients, Experience, Contact.
import { Mesh } from './Ambient'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Clients from './Clients'
import Experience from './Experience'
import { Contact, Footer } from './Contact'

export default function Site() {
  return (
    <>
      <Mesh />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Clients />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
