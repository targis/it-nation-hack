import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';

import { ThemeProvider } from 'styled-components';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';

import Button from './components/ui/Button'
import Form from './components/Form'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Thankyoupage from './components/Thankyoupage/Thankyoupage'
import Offer from './components/Offer'
import About from './components/About'
import Courses from './containers/Courses'
import Gallery from './containers/Gallery'
import Partners from './containers/Partners'
import Jobs from './containers/Jobs'
import Contacts from './containers/Contacts'
import Footer from './containers/Footer'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenuState = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const [theme, setTheme] = useState('light');

  useEffect(() => {

    const currentTheme = sessionStorage.getItem('theme')

    if (currentTheme) {
      setTheme(currentTheme)
    } 
  }, []);


  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    sessionStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {/* <Wrapper> */}
        <Navbar
          toggleMenuState={toggleMenuState}
          isMenuOpen={isMenuOpen}
          scrollTo={scrollTo}
          coursesRef={coursesRef}
          theme={theme}
          toogleTheme={toogleTheme}
        />
        <Hero
          setActiveLocation={setActiveLocation}
          scrollTo={scrollTo}
          toggleMenuState={toggleMenuState}
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
      {/* </Wrapper> */}
    </ThemeProvider>
  )
}

export default App;

// const Wrapper = styled.div`
//   background-color: ${({ theme }) => theme.colors.bgcolor};
//   * {
//     color: ${({ theme }) => theme.colors.text };
//   }
// `
