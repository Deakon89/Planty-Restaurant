import axios from 'axios'
import { useState, useEffect } from 'react'
import NavBar from '../component/navbar'
import Footer from '../component/footer.jsx'
import Carousel from '../component/carousel.jsx'
import Hero from '../component/hero.jsx'

  function InfoPage() {
      const [info, setInfo] = useState([])
      const infoUrl="https://api.spoonacular.com/recipes/716406/information?apiKey="+apiKey
      const apiKey="408814722ef44110b32ac948f30d3c14"
      
        useEffect(() => {
           axios.get(infoUrl).then((response) => {
             setInfo(response.data)
             console.log(response.data)
            })
          }, [])

      return (

          <div className="info">
            <NavBar></NavBar>
             <Hero></Hero>
             <hr className='text-success mx-2' />
             <h1>Info Page</h1>
             <p>{info}</p>
             <hr className='text-success mx-2' />  
             <Carousel/>
             <Footer></Footer>
          </div>
      )
  }
  export default InfoPage
