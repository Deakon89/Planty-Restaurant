// import
import NavBar from './component/navbar' 
import Carousel from './component/carousel.jsx'
import Footer from './component/footer.jsx'
import Hero from './component/hero.jsx'
import { Routes, Route} from 'react-router-dom'
import { InfoProvider } from './context/infoContext.jsx'
import { lazy, Suspense, } from 'react'
import './index.css'

const InfoPage = lazy(() => import('./pages/infoPage.jsx'))
const SearchBar = lazy(() => import('./pages/searchBar.jsx'))
// app Function
function App() {
  return (
    <>
        <InfoProvider>  
        <NavBar/>
        {/* main grid */}
        <div className="container-fluid text-center bg-success-subtle">
        <Suspense fallback={<div className="spinner-border" role="status"></div>}>
          <Routes> 
            <Route path="/" element={ <SearchBar/>} />
            <Route path="/infoRecipePage" element={<InfoPage/>} />
          </Routes>
        </Suspense>
        </div>
        {/* --- */}
        <hr className='text-success mx-2' />
        <Hero/>
        <hr className='text-success mx-2' />  
        <Carousel/>
        <Footer/>    
        </InfoProvider>
      </>     
  )
}

export default App
