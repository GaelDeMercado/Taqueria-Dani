import React from 'react'
import {
  Hero,
  Navbar,
  Footer,
  Prices,
  Services,
  About,
} from './components/main'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Prices />
      <Footer />
    </>
  )
}

export default App
