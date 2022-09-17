// import Button from './components/ui/Button'
// import Form from './components/Form'
import Navbar from './components/Navbar'

// import Button from './components/ui/Button';
// import Form from './components/Form';

import Offer from './components/Offer'
import About from './components/About'
import Courses from './containers/Courses'
import Gallery from './containers/Gallery';
import Partners from './containers/Partners'
import Jobs from './containers/Jobs';
import Contacts from './containers/Contacts';
import Footer from './containers/Footer'

function App() {
  return (
    <>
      <Navbar />
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
