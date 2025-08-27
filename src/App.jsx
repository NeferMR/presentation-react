import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header/Header'
import About from './components/About/About'
import Fortalezas from './components/Fortalezas/Fortalezas'
import Resumen from './components/Resumen/Resumen'
import Servicios from './components/Servicios/Servicios'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import ScrollReveal from './components/ScrollReveal/ScrollReveal'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-gray-900 transition-colors duration-300">
        <ThemeToggle />
        <Header />
        <ScrollReveal direction="up" delay={100}>
          <About />
        </ScrollReveal>
        <ScrollReveal direction="fade" delay={150}>
          <Fortalezas />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <Resumen />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={100}>
          <Servicios />
        </ScrollReveal>
        <ScrollReveal direction="scale" delay={150}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal direction="fade" delay={100}>
          <Contacto />
        </ScrollReveal>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
