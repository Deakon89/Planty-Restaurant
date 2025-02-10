import "../index.css/"

function Footer(){
return(
    // <nav className="navbar bg-body-tertiary p-0">
        <div className="container-fluid p-auto bg-success">
            <div className="row ms-3">
            <div className="col-4">
                <a href="#"><img src="/src/assets/lime.png" alt="lime" /></a>
            </div>
            <div className="col-4 d-flex justify-content-end text-warning">
            <h6 className="my-3">Copyright © 2025 Planty - All rights reserved - DMGProduct</h6>
            </div>
            <div className="col-4 d-flex justify-content-end" > 
            <i className="bi bi-github text-warning mx-3 my-3" style={{fontSize:"2,8rem"}}></i>
            <i className="bi bi-facebook text-warning mx-3 my-3" style={{fontSize:"2,8rem"}}></i>
            <i className="bi bi-instagram text-warning mx-3 my-3" style={{fontSize:"2,8rem"}}></i>
            <i className="bi bi-steam text-warning mx-3 my-3" style={{fontSize:"2,8rem"}}></i>
            </div>
            </div>
        </div>       
    // </nav>
    // <nav className="navbar bg-body-success ">
    //         <div className="row">
    //             <div className="col">
                
    //             </div>
    //             <div className="col">
    //                 <h6>Copyright © 2025 Planty</h6>
    //             </div>
    //             <div className="col">
    //                 
    //             </div>
    //         </div>
       
    // </nav>
)
}

export default Footer