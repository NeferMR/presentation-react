import { useState } from 'react'

import Header from './components/Header/Header'
import About from './components/About/About'
import Resumen from './components/Resumen/Resumen'
import Servicios from './components/Servicios/Servicios'
import Skills from './components/Skills/Skills'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <About />
      <Resumen />
      <Servicios />
      <Skills />
    </>
  )
}

export default App
