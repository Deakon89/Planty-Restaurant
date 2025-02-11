import { useInfoContext } from "../context/context"
import { Link } from "react-router-dom"

function InfoPage() {
  // use the context for share props
  const { info } = useInfoContext()
  
  return (
    <div className="info">
      <div className="container-fluid text-start">
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link className="btn btn-success text-warning my-3" to="/" >Back to search recipe</Link>
       </div>
       {/* set info result */}
        <h1 className="text-success my-3">{info.title}</h1>    
        <img src={`https://img.spoonacular.com/recipes/${info.id}-312x231.jpg`} className="img-fluid" alt={info.title} />
        <h2 className="text-success my-3">Preparation</h2>
        <div className="text-success" dangerouslySetInnerHTML={{ __html: info.instructions }}></div>    
      </div>
    </div>
  )
}

export default InfoPage

