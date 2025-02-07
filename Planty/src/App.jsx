import NavBar from './component/navbar'
import SearchBar from './pages/searchBar.jsx' 
import Carousel from './component/carousel.jsx'
import Footer from './component/footer.jsx'
import Hero from './component/hero.jsx'
import './index.css'

function App() {
  return (
    <>
        <NavBar/>
        <Hero/>
        <hr className='text-success mx-2' />
        <div className="container-fluid text-center bg-success-subtle"> 
          <SearchBar /> 
        </div>
        <hr className='text-success mx-2' />  
        <Carousel/>
        <Footer/>
      </>     
  )
}

export default App
