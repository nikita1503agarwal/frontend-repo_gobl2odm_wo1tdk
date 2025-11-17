import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Proof from './components/Proof'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'

function App() {
  const contactRef = useRef(null)
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onCta={scrollToContact} />
      <main>
        <Hero onCta={scrollToContact} />
        <Proof />
        <HowItWorks />
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Proofmind Consulting. All rights reserved.</p>
          <p>Outcome-driven digital marketing for growth teams.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
