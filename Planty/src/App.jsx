import NavBar from './component/navbar'
import Card from './component/card.jsx' 

function App() {
  
  return (
    <>
      <div className="container-fluid px-0">
        <NavBar/>
      </div>
      <div className="container-fluid text-center bg-success-subtle">
        <div className="row">
          <div className="col">
            <Card></Card>
          </div>
          <div className="col">
          <Card></Card>
          </div>
          <div className="col">
          <Card></Card>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card></Card>
          </div>
          <div className="col">
          <Card></Card>
          </div>
          <div className="col">
          <Card></Card>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
