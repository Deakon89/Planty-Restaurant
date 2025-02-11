import { useState, useEffect } from "react"
import axios from "axios"
import Card from "./card"

function Carousel(){
     const [recipes, setRecipes] = useState([])
     const [error, setError] = useState(false)
    //  second API key for make test
    //  const apiKey="408814722ef44110b32ac948f30d3c14"
     const apiKey2="2466e011a8a341e2a441223702fb2a43"
     const recipeUrl="https://api.spoonacular.com/recipes/complexSearch?"+"apiKey="+apiKey2+"&diet=vegetarian&&number=100" 
    
  useEffect(() => {
    // fetch recommend recipes
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(recipeUrl);
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError(true);
      }
    };

    fetchRecipes();
  }, []);

    return ( 
         <div className="container-fluid  text-center bg-success-subtle">
             <img className="img-fluid" src="/dist/assets/planty-recommend.png" alt="planty-recommend" />
             <div className="container-fluid overflow-scroll text-center bg-success-subtle" style={{height:"50rem"}}>   
             <div className="row row-cols-1 g-4">
                {error && <p>Ops! Something went wrong</p>}
                 {recipes.map(recipe => <Card key={recipe.id} {...recipe} />)}
             </div>         
             </div>
         </div>         
    )
}

export default Carousel