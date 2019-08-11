import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList.jsx'
import ProductAdd from './components/ProductAdd/ProductAdd.jsx'
import Nav from './components/nav/Nav';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <header>
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
