import { MotionConfig } from 'framer-motion'
import './App.css'
import {
  Navbar, Hero, About, Skills, Projects, Deployment,
  Experience, Achievements, Education, Contact, Footer,
} from './components/Sections'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app">
        <a className="skip-link" href="#about">Skip to content</a>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Deployment />
          <Experience />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
