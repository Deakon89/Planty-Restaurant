import { useState, useEffect } from "react"
import axios from "axios"
import Card from "./card"

function Carousel(){
     const [recipes, setRecipes] = useState([])
    //  const apiKey="408814722ef44110b32ac948f30d3c14"
     const apiKey2="2466e011a8a341e2a441223702fb2a43"
     const recipeUrl="https://api.spoonacular.com/recipes/complexSearch?"+"apiKey="+apiKey2+"&diet=vegetarian&&number=100" 
    
  useEffect(() => {
     axios.get(recipeUrl).then((response) => {
       setRecipes(response.data.results)
       console.log(response.data.results)
      })
   }, [])

    return ( 
         <div className="container-fluid  text-center bg-success-subtle">
             <h2 className="text-success">Popular Vegetarian Recipes</h2>
             <div className="container-fluid overflow-scroll text-center bg-success-subtle" style={{height:"50rem"}}>   
             <div className="row row-cols-1 g-4">
                 {recipes.map(recipe => <Card key={recipe.id} {...recipe} />)}
             </div>         
             </div>
         </div>         
    )
}

export default Carousel