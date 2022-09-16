import Button from './components/ui/Button'
import Form from './components/Form'
import Navbar from './components/Navbar'

// import Button from './components/ui/Button';
// import Form from './components/Form';
import About from './components/About'
import Courses from './containers/Courses'
import Gallery from './containers/Gallery'

function App() {
  return (
    <>
      <Navbar />
      <Courses />
      <Gallery />
    </>
  )
}

export default App
