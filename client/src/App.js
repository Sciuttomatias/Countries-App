import React from 'react'
import { Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import CountryDetail from './components/CountryDetail/CountryDetail';
import AddActivity from './components/AddActivity/AddActivity';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing}/>
      <Route path='/countries' component={Navbar}/>
      <Route exact path="/countries" component={Home}/>
      <Route exact path="/countries/searched" component={Home}/>
      <Route exact path="/countryDetail/:id" component={CountryDetail}/>
      <Route exact path="/addActivity" component={AddActivity}/>
    </div>
  );
}

export default App;
