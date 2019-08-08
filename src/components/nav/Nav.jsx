import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.style.css'

const Nav = () => {
    return(
        <div className="nav-container">
            <Link to="/add">Go to add</Link>
            <Link to="/update">Go to edit</Link>
            <Link to="/meals">Meal picker</Link>
        </div>
    )
}

export default Nav;