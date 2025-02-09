import NavBar from './component/navbar'
import SearchBar from './pages/searchBar.jsx' 
import Carousel from './component/carousel.jsx'
import Footer from './component/footer.jsx'
import Hero from './component/hero.jsx'
import InfoPage from './pages/infoPage.jsx'
import { Routes, Route } from 'react-router-dom'
import { InfoProvider } from './context/infoContext.jsx'
import './index.css'

function App() {
  return (
    <>
        <InfoProvider>
        <NavBar/>
        <Hero/>
        <hr className='text-success mx-2' />
        <div className="container-fluid text-center bg-success-subtle">
          <Routes> 
            <Route path="/" element={<SearchBar/>} />
            <Route path="/infoRecipePage" element={<InfoPage/>} />
          </Routes> 
        </div>
        <hr className='text-success mx-2' />  
        <Carousel/>
        <Footer/>
        </InfoProvider>
      </>     
  )
}

export default App
