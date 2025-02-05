import { useState, useEffect } from 'react'
import Card from './card'
import axios from 'axios'
function SearchBar(){
    const [searchQuery, setSearchQuery] = useState("")
    const [recipes, setRecipes] = useState([])

    const apiKey="408814722ef44110b32ac948f30d3c14"
    const recipeUrl="https://api.spoonacular.com/recipes/complexSearch?"+"apiKey="+apiKey+"&diet=vegetarian&number=100"
    // const searchUrl="https://api.spoonacular.com/recipes/complexSearch?"+"apiKey="+apiKey+"&diet=vegetarian&query="+searchQuery+"&number=10" 
    // const infoUrl="https://api.spoonacular.com/recipes/"+{id}+"/information?apiKey="+apiKey
    // let id

  useEffect(() =>{
    axios.get(recipeUrl).then((response) => {
        setRecipes(response.data.results)
        console.log(response.data.results)
    })
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    // axios.get(searchUrl).then((response) => {
    //     setRecipes(response.data.results)
    // })
  }

  
    
    return (
        <>
        <div className="container-fluid px-5 my-5 text-center" >
            <form className="input-group" role="search" onSubmit={handleSearch}>
              <input className="form-control mx-auto" type="search" placeholder="Search" aria-label="Search"
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
              <button className="btn btn-outline-warning text-warning bg-success " type="submit">Search</button>
            </form>
        </div>
        <div className="container-fluid text-center bg-success-subtle">
            <div className="row">
                <div className="col">  
                </div>
                <div className="col-md-auto">
                    {recipes.map((recipe) =>(<Card key={recipe.id} recipe={recipe} />))}  
                </div>
                <div className="col">
                </div>
            </div> 
      </div>
    </>
    )
}

export default SearchBar
