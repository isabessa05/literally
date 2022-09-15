import React from "react";
import { Link } from 'react-router-dom'
import './navbar.css'
function NavBar () {   

    return (
        <nav className="menu__container">
            <div class="menu">
        <Link to="/"> Home  </Link>
        <Link to="/allbooks"> All books   </Link>
        <Link to="/newbook"> Add a new book! </Link>
        </div>
        </nav>
    )
}

export default NavBar;