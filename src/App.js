import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Searchbar from './components/Searchbar/Searchbar';
import ProductAdd from './components/ProductAdd/ProductAdd';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Shopping cart</h1>
      </header>
      <Router>
      <Link to="/add">Go to add</Link>
      <Route exact path="/" component={Searchbar}/>
      <Route exact path="/add" component={ProductAdd}/>  
      </Router>
    </div>
  );
}

export default App;
