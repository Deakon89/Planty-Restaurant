
function SearchBar(){   
    return (
        <div className="container-fluid px-5 my-5 text-center" >
                <form className="input-group" role="search">
                <input className="form-control mx-auto" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success " type="submit">Search</button>
                </form>
        </div>
    
    )
}

export default SearchBar
