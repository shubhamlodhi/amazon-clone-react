import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"


function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      
      <Route path="/checkout"><h1><Header/> <Checkout/></h1></Route>
      
      <Router path="/login"><h1>LOGIN PAGE</h1></Router>

      <Route path="/">  <Header />  <Home/> </Route >

    </Switch>
    </div>
    </Router>
  );
}

export default App;
