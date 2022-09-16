import { useState } from 'react'
import Button from './components/ui/Button'
import Form from './components/Form'
import Navbar from './components/Navbar'

// import Button from './components/ui/Button';
// import Form from './components/Form';
import Hero from './components/Hero'
import About from './components/About'
import Courses from './containers/Courses'
import Gallery from './containers/Gallery'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenuState = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <Navbar toggleMenuState={toggleMenuState} isMenuOpen={isMenuOpen} />
      <Hero isMenuOpen={isMenuOpen} />
      <Courses />
      <About />
      <Gallery />
    </>
  )
}

export default App
