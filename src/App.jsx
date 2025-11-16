import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Activities from './components/Activities'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Activities />
      <Contact />
    </div>
  )
}

export default App

