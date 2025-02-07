import { Link } from "react-router-dom"
function Card(recipe) {
    return (
         <div className="card mx-auto my-5" style={{maxWidth:"18rem"}}>
            <img src={"https://img.spoonacular.com/recipes/"+recipe.id+"-312x231.jpg"} className="card-img-top" alt={recipe.title}/>
            <div className="card-body">
                <h5 className="card-title text-success">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
                <Link className="btn btn-success text-warning" to="/infoRecipePage" >Recipe info</Link>
            </div>
        </div>
    )
}

export default Card