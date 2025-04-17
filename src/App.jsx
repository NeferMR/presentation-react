import { useState } from 'react'

import Header from './components/Header/Header'
import About from './components/About/About'
import Resumen from './components/Resumen/Resumen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
      <Resumen />
    </>
  )
}

export default App
