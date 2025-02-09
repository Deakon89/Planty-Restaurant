import { useState } from 'react'
import Card from '../component/card'
import axios from 'axios'


function SearchBar(){
    const [searchQuery, setSearchQuery] = useState("")
    const [recipes, setRecipes] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    // const apiKey="408814722ef44110b32ac948f30d3c14"
    const apiKey2="2466e011a8a341e2a441223702fb2a43"
    const searchUrl="https://api.spoonacular.com/recipes/complexSearch?"+"apiKey="+apiKey2+"&diet=vegetarian&query="+searchQuery+"&number=10" 
    
  const handleSearch = (e) => {
    e.preventDefault()
      if(searchQuery !== "") {
        setLoading(true)
        try {
          axios.get(searchUrl).then((response) => {
            setRecipes(response.data.results)
            console.log(response.data.results)
            if(response.data.results.length === 0) {
              setLoading(false)
              alert("No results found")
            }
          })
        } catch (error) {
          alert("Ops! Something went wrong")
          setLoading(false)
          setError(true)
          console.log(error)
        }finally {
          setLoading(false)
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
            {
              error ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Ops! Something went wrong</span>
                  </div>
                </div>
              ):
              loading ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ):(
        <div className="container-fluid text-center bg-success-subtle">
          <div className="row row-cols-1 g-4">
                {recipes.map((recipe) => {
                    return <><Card key={recipe.id} {...recipe} /></>
                    })}
          </div>             
        </div>
      )}      
    </>
    )
}

export default SearchBar
