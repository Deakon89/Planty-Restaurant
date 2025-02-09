// import {useState, useEffect} from "react"
// import axios from "axios"
import { useInfoContext } from "../context/context"


function InfoPage() {
  const { info } = useInfoContext()

  return (
    <div className="info">
      <div className="container-fluid text-center">
        <img src={`https://img.spoonacular.com/recipes/${info.id}-312x231.jpg`} className="img-fluid" alt={info.title} />
        <h1 className="text-success">{info.title}</h1>
        <div className="text-success" dangerouslySetInnerHTML={{ __html: info.instructions }}></div>
      </div>
    </div>
  )
}

export default InfoPage
