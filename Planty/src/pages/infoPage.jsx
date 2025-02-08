 import axios from 'axios'
import { useState,useEffect } from 'react'
import NavBar from '../component/navbar'
import Footer from '../component/footer.jsx'
import Carousel from '../component/carousel.jsx'
import Hero from '../component/hero.jsx'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchInfoRcipe } from '../redux/axiosSlice'


  function InfoPage() {
       const [info, setInfo] = useState([])
       const infoUrl="https://api.spoonacular.com/recipes/716406/information?apiKey=408814722ef44110b32ac948f30d3c14"
      
         useEffect(() => {
             axios.get(infoUrl).then((response) => {
               setInfo(response.data)
               console.log(response.data)
             })
           }, [])

      // const dispatch = useDispatch()
      // const info = useSelector((state) => state.recipe.instructions)

      // useEffect(() => {
      //   dispatch(fetchInfoRcipe())
      //   window.scrollTo({
      //     top: 0,
      //     behavior: "smooth",
      //   });
      // }, [dispatch])
      
      return (

          <div className="info">
            <NavBar></NavBar>
             <Hero></Hero>
             <hr className='text-success mx-2' />
             <div className="container-fluid text-center">
               <img src={"https://img.spoonacular.com/recipes/"+info.id+"-312x231.jpg"} className="img-fluid" alt="Hero"></img>
               <h1 className="text-success">{info.title}</h1>
               <p className="text-success">{info.instructions}</p>
             </div>
             <hr className='text-success mx-2' />  
             <Carousel/>
             <Footer></Footer>
          </div>
      )
  }
  export default InfoPage
