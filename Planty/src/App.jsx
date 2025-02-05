import NavBar from './component/navbar'
import SearchBar from './component/searchBar' 
// import Card from './component/card.jsx'
import Carousel from './component/carousel.jsx'
import Footer from './component/footer.jsx'
import Hero from './component/hero.jsx'
import './index.css'
// import { useState } from 'react'
 

function App() {
  // const [recipes, setRecipes] = useState([])

  

  return (
    <>  
        <NavBar/>
        <Hero></Hero>
        <hr className='text-success mx-2' />
        <SearchBar></SearchBar>
        <hr className='text-success mx-2' />
        <div className="container-fluid text-center bg-success-subtle">
        <Carousel></Carousel>
        </div>
        <Footer></Footer>
    </>
  )
}

export default App
