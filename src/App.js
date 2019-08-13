import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList.jsx'
import ProductAdd from './components/ProductAdd/ProductAdd.jsx'
import MealPickerContainer from './components/mealpickercontainer/MealPickerContainer'
import Nav from './components/nav/Nav';
import AddCategory from './components/addcategory/AddCategory.jsx';
import AddStore from './components/addstore/AddStore.jsx';
import Register from './components/register/Register.jsx';
import Signin from './components/signin/Signin.jsx';
import './App.css';
import 'tachyons';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      isLoggedIn: sessionStorage.getItem('loggedIn') || false,
    }
  }

  signin = () => {
    this.setState({isLoggedIn: true})
  }

  signout = () => {
    sessionStorage.setItem('loggedIn', false);
    this.setState({isLoggedIn: false});
  }

  render(){
      const {isLoggedIn} = this.state;
      return (
        <div className="App">
          <Router> 
            {
              isLoggedIn && <Nav signout={this.signout}/>
            }
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/add" component={ProductAdd}/>  
            <Route exact path="/signin"  render={(props) => <Signin {...props} login={this.signin} />}/>  
            <Route exact path="/register" component={Register}/>  
            <Route exact path="/category" component={AddCategory}/>  
            <Route exact path="/store" component={AddStore}/>  
            <Route exact path="/meals" component={MealPickerContainer}/>  
            {

              isLoggedIn 
              ? <Redirect from="/signin" exact to="/"/> 
              : <Redirect from="/" exact to="/signin"/>
            }
          </Router>
        </div>
      );
  }
}

export default App;
