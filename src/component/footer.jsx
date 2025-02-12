import "../index.css/"
import lime from "../assets/lime.png"
function Footer(){
return(
    // <nav className="navbar bg-body-tertiary p-0">
        <div className="container-fluid p-auto bg-success">
            <div className="row ms-3">
            <div className="col-4">
                <a className="lime" href="#"><img id="limeSvg" src={lime} className="img-fluid" alt="lime" /></a>
            </div>
            <div className="col-4 d-flex justify-content-end text-warning">
            <h6 className="my-3">Copyright © 2025 Planty - All rights reserved - DMGProduct</h6>
            </div>
            <div className="col-4 d-flex justify-content-end" > 
            <a href="https://github.com/Deakon89/portfolio.git" target="_blank" >
           <i className="bi bi-github text-warning mx-3 my-3"></i> 
           </a>
            <a href="https://www.facebook.com/francesco.cocchi.54" target="_blank" >
            <i className="bi bi-facebook text-warning mx-3 my-3"></i>
            </a>
            <a href="https://www.instagram.com/cocchi647/" target="_blank" >
            <i className="bi bi-instagram text-warning mx-3 my-3" ></i>
            </a>
            </div>
            </div>
        </div>       
)
}

export default Footer