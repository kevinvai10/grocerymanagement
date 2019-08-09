import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProductAdd from './components/ProductAdd/ProductAdd';
import Nav from './components/nav/Nav';
import './App.css';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Shopping cart</h1>
      </header>
      <Router>
        <Nav />
        <Route exact path="/" component={ProductList}/>
        <Route exact path="/add" component={ProductAdd}/>  
      </Router>
    </div>
  );
}

export default App;
