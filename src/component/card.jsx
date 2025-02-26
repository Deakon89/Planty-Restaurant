import { Link } from "react-router-dom"
import { useInfoContext } from "../context/context"


function Card(recipe) {
    // use the context for set the info
    const {setInfo} = useInfoContext()

    const handleClick = () => {
        setInfo(recipe.id)
        scrollTo(700, 700)
    } 

    return (
        // recipe card
         <div className="card mx-auto my-5 p-0 shadow" style={{maxWidth:"18rem"}}>
            <img src={"https://img.spoonacular.com/recipes/"+recipe.id+"-312x231.jpg"} className="card-img-top" alt={recipe.title}/>
            <div className="card-body">
                <h5 className="card-title text-success">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
                <Link className="btn btn-success text-warning" onClick={handleClick}  to="/infoRecipePage" >Recipe info</Link>
            </div>
        </div>
    )
}


export default Card
