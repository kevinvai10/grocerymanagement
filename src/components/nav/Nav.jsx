import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import './Nav.style.css'

const Nav = (props) => {
    console.log(props.history.location.pathname);
    return(
        <div className="nav-container">
            <Link to="/" className={ props.history.location.pathname === '/' ? "nav-container-item-selected" : "nav-container-item"}>Home</Link>
            <Link to="/add" className={props.history.location.pathname === '/add' ? "nav-container-item-selected" : "nav-container-item"}>Add Product</Link>
            <Link to="/meals" className={props.history.location.pathname === '/meals' ? "nav-container-item-selected" : "nav-container-item"}>Meal picker</Link>
        </div>
    )
}

export default withRouter(Nav);