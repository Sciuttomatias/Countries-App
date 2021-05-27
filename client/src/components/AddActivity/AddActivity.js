import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { addActivity, getCountries } from '../../actions/index'
import Navbar from '../Home/Navbar/Navbar';
import './AddActivity.css';


function AddActivity() {

  
  const [activity, setActivity] = useState({ name: "", difficulty: 1, duration: 0, season: "", countries: [] });
  
  const dispatch = useDispatch();

  const history = useHistory();
  
  let countries = useSelector(store => store.countries);

  countries = countries.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    
    return 0;
  });

  const fetchCountries = () => { // Para poder usar loc countries en el dropdown menu
    try{
      dispatch(getCountries());
    } catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    console.log("Se montó al Add Activity")
    fetchCountries()
    return () => {
      console.log("Se desmontó del Add Activity")
    }
  }, [])

  // PARA QUE ME APAREZCAN LOS COUNTRIES EN EL DROPDOWN MENU DEL FORM ( Y NO TENER PROBLEMAS CON EL RENDERIZADO DE JSX ).
  // FALTA ORDENARLOS ALFABETICAMENTE..
  const dropdownMenu = [];
  for(const country of countries){
    dropdownMenu.push(<option key={country.id} value={country.id}>{country.name}</option>)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addActivity(activity));
    history.push('/countries');
  }

  const handleChange = (e) => {
    if(e.target.name === 'countries'){
      setActivity({
        ...activity,
        [e.target.name]: [...activity.countries, e.target.value]
      })
    } else {
      setActivity({
        ...activity,
        [e.target.name]: e.target.value   // ¿ Qué hace exactamente esta linea ? ¿ Cómo trabajo con el id de los paises (COL, ARG, CAN) ?
      })
    }
  }

  return (
    <div className="main-div">
      <Navbar />
        <h2>Add an activity related to tourism!</h2>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-name">
            <label>Name of Activity </label><br/>
            <input value={activity.name} type="text" name="name" onChange={handleChange} required />
          </div>
          <div className="form-difficulty">
            <label>Difficulty (between 1 and 5)</label><br/>
            <input value={activity.difficulty} type="number" id="Difficulty" name="difficulty" min="1" max="5" placeholder="1" onChange={handleChange}/>
          </div>
          <div className="form-duration">
            <label>Duration </label><br/>
            <input value={activity.duration} type="time" name="duration" onChange={handleChange} />
          </div>
          <div className="form-season"><br/>
            <label>Choose a season </label><br/>
            <select value={activity.season} id="season" name="season" onChange={handleChange}>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
            </select>
          </div>
          <div id="form-countries" className="form-countries">
            <label>Choose a country </label><br/>
            <select multiple size="5" value={activity.countries} id="countries" name="countries" onChange={handleChange} className="select">
              {dropdownMenu}
            </select>
          </div>
          <button className="form-btn" type="submit">Add</button>
      </form>
    </div>
  );
}


export default withRouter(AddActivity);