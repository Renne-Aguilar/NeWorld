import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Welcome from './Components/Welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">

      <Switch>
        <Route exact path="/">
           <Welcome/>
        </Route>
        <Route exact path="/home">
            <Header/>
            <Home/>
        </Route>
      
      
      </Switch>

      
    </div>
    </Router>
  );
}

export default App;
