import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import armbanden from './components/pages/armbanden';
import new_releases from './components/pages/new_releases';
import oorbellen from './components/pages/oorbellen';
import kettingen from './components/pages/kettingen';
import Hearth_bracelet_gold from './components/pages/Products/Hearth_bracelet_gold';
import shoppingCard from './components/pages/shoppingCard';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/armbanden' component={armbanden} />
          <Route path='/kettingen' component={kettingen} />
          <Route path='/new_releases' component={new_releases} />
          <Route path='/shoppingCard' component={shoppingCard} />
          <Route path='/oorbellen' component={oorbellen} />
          <Route path='/Hearth_bracelet_gold' component={Hearth_bracelet_gold} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
