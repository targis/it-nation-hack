import Navbar from './components/Navbar'
import Thankyoupage from './components/Thankyoupage/Thankyoupage';
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
      <Thankyoupage />
    </>
  )
}

export default App
