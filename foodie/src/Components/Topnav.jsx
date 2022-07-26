import Logo from "../Assets/Logo.jpeg"
import {Link} from 'react-router-dom'
import "../Styles/Navbar.css"

function Topnav()
{
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <a href="#"> <img src={Logo} alt="Lost"/></a>
            </div>
            <div className="nav-bar-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}
export default Topnav
