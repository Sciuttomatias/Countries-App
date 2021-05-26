import React from 'react'
import { Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';
import AddActivity from './components/AddActivity/AddActivity';
import {useSelector} from 'react-redux';


function App() {
  const countries = useSelector(store => store.countries);
  return (
    <div className="App">
      <Route exact path="/" component={Landing}/>
      <Route exact path="/countries" component={Home}/>
      <Route exact path="/countries/searched" component={Home}/>
      <Route exact path="/countryDetail/:id" component={CountryDetail}/>
      <Route exact path="/addActivity" component={AddActivity} countries={countries}/>
    </div>
  );
}

export default App;
