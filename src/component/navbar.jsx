import '../index.css'
function NavBar() {
    return (
        <nav className="navbar sticky-top bg-body-tertiary py-0">
            <div className="container-fluid w bg-success">
                <span className="navbar-brand mb-0 h1 text-warning">
                    <a href="#"><img className='img-fluid' id="logo" src="/dist/assets/logo_bg_removed.png.png" alt="Planty" /></a>
                </span>
                <a className='lime' href="#"><img src="/dist/assets/lime.png" alt="lime" /></a>
            </div>
        </nav>
    )
}

export default NavBar