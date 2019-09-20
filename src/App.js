import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import ProductAdd from './pages/ProductAdd/ProductAdd';
import MealPickerContainer from './pages/mealpickercontainer/MealPickerContainer';
import Nav from './components/nav/Nav';
import AddCategory from './components/addcategory/AddCategory.jsx';
import AddStore from './components/addstore/AddStore.jsx';
import Register from './components/register/Register.jsx';
import Signin from './components/signin/Signin.jsx';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import './App.css';
import 'tachyons';

const App = ({ isLoggedIn }) => {
  return (
    <div className='App'>
      <ReactNotification />
      <Router>
        {isLoggedIn && <Nav />}
        <Route exact path='/' component={ProductList} />
        <Route exact path='/add' component={ProductAdd} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/category' component={AddCategory} />
        <Route exact path='/store' component={AddStore} />
        <Route exact path='/meals' component={MealPickerContainer} />
        {isLoggedIn ? (
          <Redirect from='/signin' exact to='/' />
        ) : (
          <Redirect from='/' exact to='/signin' />
        )}
      </Router>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.signin.loginStatus
});

export default connect(mapStateToProps)(App);
