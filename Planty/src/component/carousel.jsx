import Card from "./card"

function Carousel() {
    return (
        <div className="carousel slide mt-5" data-bs-ride="carousel">
            <div className="row g-0">
                <div className="col">
                </div>
                <div className="col-md-auto">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Card></Card>
                        </div>
                        <div className="carousel-item">
                            <Card></Card>
                        </div>
                        <div className="carousel-item">
                            <Card></Card>
                        </div>
                    </div>
                </div>
                <div className="col">
                </div>
           </div>
        </div>
    )
}

export default Carousel