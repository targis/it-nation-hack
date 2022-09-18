import { useState, useRef, useEffect } from 'react'
import { ThemeProvider } from 'styled-components';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';
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
import styled from 'styled-components'

// import Thankyoupage from './components/Thankyoupage/Thankyoupage'

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalFormOpen, setIsModalFormOpen] = useState(false)
  const [isModalFormVideo, setIsModalVideoOpen] = useState(false)
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenuState = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isFixedBody = isModalFormOpen || isModalFormVideo

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const currentTheme = sessionStorage.getItem('theme')

    if (currentTheme) {
      setTheme(currentTheme)
    }

    const listener = (event) => {
      if (event.code === 'Escape') {
        console.log('Escape key was pressed. Run your function.')

        event.preventDefault()
        setIsModalVideoOpen(false)
        setIsVideoPlaying(false)
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    sessionStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
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
    <ThemeProvider
      theme={theme === 'light' ? lightTheme : darkTheme}
      onKeyPress={() => console.log('sads')}
    >
      <Navbar
        toggleMenuState={toggleMenuState}
        isMenuOpen={isMenuOpen}
        handleModal={setIsModalFormOpen}
        coursesRef={coursesRef}
        theme={theme}
        toogleTheme={toogleTheme}
      />
      <Wrapper fixed={isFixedBody}>
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
        <Contacts
          ref={contactsRef}
          setIsModalFormOpen={setIsModalFormOpen}
          setIsFormSubmitted={setIsFormSubmitted}
        />
        <Footer scrollTo={scrollTo} />
        <ModalWindow
          active={isModalFormOpen}
          setActive={setIsModalFormOpen}
          isModalForm={true}
          setIsFormSubmitted={setIsFormSubmitted}
          isFormSubmitted={isFormSubmitted}
        >
          {/* <ContactForm light={true} /> */}
        </ModalWindow>
        <ModalWindow
          active={isModalFormVideo}
          setIsVideoPlaying={setIsVideoPlaying}
          setActive={setIsModalVideoOpen}
        >
          <Video isVideoPlaying={isModalFormVideo} />
        </ModalWindow>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App

const Wrapper = styled.div`
  position: ${({ fixed }) => (fixed ? 'fixed' : 'static')};
  overflow: ${({ fixed }) => (fixed ? 'hidden' : 'auto')};
`
