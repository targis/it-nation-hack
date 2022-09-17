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
import Video from './containers/Video'

// import Thankyoupage from './components/Thankyoupage/Thankyoupage'

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalFormOpen, setIsModalFormOpen] = useState(false)
  const [isModalFormVideo, setIsModalVideoOpen] = useState(false)
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenuState = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navbarRef = useRef(null)
  const coursesRef = useRef(null)
  const aboutRef = useRef(null)
  const offerRef = useRef(null)
  const jobsRef = useRef(null)
  const contactsRef = useRef(null)

  const scrollTo = {
    top: () =>
      navbarRef?.current.scrollIntoView({
        behavior: 'smooth',
      }),
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
        ref={navbarRef}
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
        setIsModalFormOpen={setIsModalFormOpen}
        setIsModalVideoOpen={setIsModalVideoOpen}
      />
      <Courses
        activeLocation={activeLocation}
        setActiveLocation={setActiveLocation}
        ref={coursesRef}
      />
      <Offer scrollTo={scrollTo} ref={offerRef} />
      <Jobs ref={jobsRef} />
      <About ref={aboutRef} />
      <Gallery />
      <Partners />
      <Contacts ref={contactsRef} />
      <Footer scrollTo={scrollTo} />
      <ModalWindow
        active={isModalFormOpen}
        setActive={setIsModalFormOpen}
        isModalForm={true}
      >
        <ContactForm light={true} />
      </ModalWindow>
      <ModalWindow
        active={isModalFormVideo}
        setIsVideoPlaying={setIsVideoPlaying}
        setActive={setIsModalVideoOpen}
      >
        <Video isVideoPlaying={isModalFormVideo} />
      </ModalWindow>
    </>
  )
}

export default App
