// import Button from './components/ui/Button'
// import Form from './components/Form'
import Navbar from './components/Navbar'

// import Button from './components/ui/Button';
// import Form from './components/Form';

import Offer from './components/Offer'
import About from './components/About'
import Courses from './containers/Courses'
import Gallery from './containers/Gallery'
import Salary from './containers/Jobs';

function App() {
  return (
    <>
      <Navbar />
      <Courses />
      <Offer />
      <About />
      <Gallery />
      <Salary />

    </>
  )
}

export default App
