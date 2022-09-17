import { useState } from 'react'
import Button from './components/ui/Button'
import Form from './components/Form'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Thankyoupage from './components/Thankyoupage/Thankyoupage'
import Offer from './components/Offer'
import About from './components/About'
import Courses from './containers/Courses'
import Gallery from './containers/Gallery';
import Partners from './containers/Partners'
import Jobs from './containers/Jobs';
import Contacts from './containers/Contacts';
import Footer from './containers/Footer'

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
      <Offer />
      <Jobs />
      <About />
      <Gallery />
      <Partners />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
