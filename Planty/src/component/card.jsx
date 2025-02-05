function Card(recipe) {
    return (
         <div className="card mx-3 my-5" style={{maxWidth:"20rem"}}>
            <img src={"https://img.spoonacular.com/recipes/"+recipe.id+"/-312x231.jpg"} className="card-img-top" alt={recipe.title}/>
            <div className="card-body">
                <h5 className="card-title text-success">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
                <a href="#" className="btn btn-success text-warning">Recipe Info!</a>
            </div>
        </div>
    )
}

export default Card