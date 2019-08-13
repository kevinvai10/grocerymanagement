import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import './Nav.style.css'
import { setLogin } from '../../redux/actions';

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginStatus
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signout: (value) => dispatch(setLogin(value)),
    }
}

const Nav = (props) => {
    console.log(props.history.location.pathname);
    const handleSignout = () => {
        const {signout} = props;
        signout(false);
    }
    return(
        <div className="nav-container">
            <Link to="/" className={ props.history.location.pathname === '/' ? "nav-container-item-selected" : "nav-container-item"}>Home</Link>
            <Link to="/add" className={props.history.location.pathname === '/add' ? "nav-container-item-selected" : "nav-container-item"}>Add Product</Link>
            <Link to="/meals" className={props.history.location.pathname === '/meals' ? "nav-container-item-selected" : "nav-container-item"}>Meal picker</Link>
            <button className="nav-container-item" onClick={handleSignout}>Sign out</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));