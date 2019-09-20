import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './Nav.style.css';
import { setLogin } from '../../redux/signin/signin.actions';

const Nav = ({ signout, history }) => {
  const handleSignout = () => {
    sessionStorage.setItem('user_id', null);
    signout(false);
  };
  return (
    <div className='nav-container'>
      <Link
        to='/'
        className={
          history.location.pathname === '/'
            ? 'nav-container-item-selected'
            : 'nav-container-item'
        }
      >
        Home
      </Link>
      <Link
        to='/add'
        className={
          history.location.pathname === '/add'
            ? 'nav-container-item-selected'
            : 'nav-container-item'
        }
      >
        Add Product
      </Link>
      <Link
        to='/meals'
        className={
          history.location.pathname === '/meals'
            ? 'nav-container-item-selected'
            : 'nav-container-item'
        }
      >
        Meal picker
      </Link>
      <button className='nav-container-item' onClick={handleSignout}>
        Sign out
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signout: value => dispatch(setLogin(value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Nav));
