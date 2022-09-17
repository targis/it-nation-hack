import { useState, useRef, useEffect } from 'react'
import Button from './components/ui/Button'
import Form from './components/Form/'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Thankyoupage from './components/Thankyoupage/Thankyoupage'
import Offer from './components/Offer'
import About from './components/About'
import Courses from './containers/Courses'
import Gallery from './containers/Gallery'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenuState = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const coursesRef = useRef(null)
  const aboutRef = useRef(null)
  const offerRef = useRef(null)
  const jobsRef = useRef(null)
  const handleCoursesScroll = () =>
    coursesRef?.current.scrollIntoView({ behavior: 'smooth' })
  const handleAboutScroll = () =>
    aboutRef?.current.scrollIntoView({ behavior: 'smooth' })
  const handleOfferScroll = () =>
    offerRef?.current.scrollIntoView({ behavior: 'smooth' })
  const handleJobsScroll = () =>
    jobsRef?.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <Navbar
        toggleMenuState={toggleMenuState}
        isMenuOpen={isMenuOpen}
        scrollTo={{
          courses: handleCoursesScroll,
          about: handleAboutScroll,
          offer: handleOfferScroll,
          jobs: handleJobsScroll,
        }}
        coursesRef={coursesRef}
      />
      <Hero
        scrollTo={{
          courses: handleCoursesScroll,
          about: handleAboutScroll,
          offer: handleOfferScroll,
          jobs: handleJobsScroll,
        }}
        toggleMenuState={toggleMenuState}
        isMenuOpen={isMenuOpen}
      />
      <Courses ref={coursesRef} />
      <Offer ref={offerRef} />
      <Jobs ref={jobsRef} />
      <About ref={aboutRef} />
      <Gallery />
      <Partners />
      <Contacts />
      <Footer />
      <Form />
    </>
  )
}

export default App
