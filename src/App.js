import { useState, useRef } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import Jobs from './containers/Jobs'
import Partners from './containers/Partners'
import Contacts from './containers/Contacts'
import About from './components/About'
import Courses from './containers/Courses'
import Gallery from './containers/Gallery'
import Footer from './containers/Footer'
import ModalWindow from './components/ModalWindow'
import ContactForm from './components/ContactForm'

// import Thankyoupage from './components/Thankyoupage/Thankyoupage'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalFormOpen, setIsModalFormOpen] = useState(false)
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenuState = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const coursesRef = useRef(null)
  const aboutRef = useRef(null)
  const offerRef = useRef(null)
  const jobsRef = useRef(null)
  const contactsRef = useRef(null)

  const scrollTo = {
    courses: () =>
      coursesRef?.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      }),
    about: () =>
      aboutRef?.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      }),
    offer: () =>
      offerRef?.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      }),
    jobs: () =>
      jobsRef?.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      }),
    contacts: () => contactsRef?.current.scrollIntoView({ behavior: 'smooth' }),
  }

  const [activeLocation, setActiveLocation] = useState(null)

  return (
    <>
      <Navbar
        toggleMenuState={toggleMenuState}
        isMenuOpen={isMenuOpen}
        handleModal={setIsModalFormOpen}
        coursesRef={coursesRef}
      />
      <Hero
        setActiveLocation={setActiveLocation}
        scrollTo={scrollTo}
        toggleMenuState={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <Courses
        activeLocation={activeLocation}
        setActiveLocation={setActiveLocation}
        ref={coursesRef}
      />
      <Offer ref={offerRef} />
      <Jobs ref={jobsRef} />
      <About ref={aboutRef} />
      <Gallery />
      <Partners />
      <Contacts ref={contactsRef} />
      <Footer />
      <ModalWindow active={isModalFormOpen} setActive={setIsModalFormOpen}>
        <ContactForm />
      </ModalWindow>
    </>
  )
}

export default App
