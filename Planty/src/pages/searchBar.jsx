import { useState } from 'react'
import Card from '../component/card'
import axios from 'axios'

function SearchBar(){
    const [searchQuery, setSearchQuery] = useState("")
    const [recipes, setRecipes] = useState([])
    const apiKey="408814722ef44110b32ac948f30d3c14"
    const searchUrl="https://api.spoonacular.com/recipes/complexSearch?"+"apiKey="+apiKey+"&diet=vegetarian&query="+searchQuery+"&number=10" 
    
  const handleSearch = (e) => {
    e.preventDefault() 
      if(searchQuery !== "") {
        axios.get(searchUrl).then((response) => {
          setRecipes(response.data.results)
          console.log(response.data.results)
        }).catch (error) {
          alert(error)
        }  
      }    
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
        <hr className='text-success mx-2' />
        <div className="container-fluid text-center bg-success-subtle">
          <div className="row row-cols-1 g-4">
                {recipes.map((recipe) => {
                    return <Card key={recipe.id} {...recipe} />
                    })}
          </div>         
        </div>      
    </>
    )
}

export default SearchBar
