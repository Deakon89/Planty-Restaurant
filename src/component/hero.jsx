import lemonHero from "../assets/lemon hero xl.jpg"
function Hero(){
 
    return(    
    <div className="container-fluid  p-0">
        <img src={lemonHero} className="img-fluid" alt="Hero"></img>
    </div>
    )
}

export default Hero