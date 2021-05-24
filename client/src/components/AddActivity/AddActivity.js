import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { addActivity, getCountries } from '../../actions/index'
import Navbar from '../Home/Navbar/Navbar';
import './AddActivity.css';

// ¿ COMO HAGO PARA USAR EL ESTADO DE REDUX Y NO UNO LOCAL COMO ESTOY HACIENDO ACÁ?
// EL PROBLEMA QUE TENGO ES QUE SE ME RESETEA EL ESTADO CADA VEZ QUE EL USUARIO ENTRA A ESTE COMPONENTE

function AddActivity() {

  
  const [activity, setActivity] = useState({ name: "", difficulty: 0, duration: 0, season: "", countries: [] });
  
  const dispatch = useDispatch();
  
  const countries = useSelector(store => store.countries);
  
  const fetchCountries = () => { // Para poder usar loc countries en el dropdown menu..
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

  // ¿ HACEN FALTA LAS KEYS EN LOS ELEMENTOS DE MI FORM ?

  // https://es.reactjs.org/docs/forms.html   <---- FORMS EN REACT

  return (
    <div>
      <Navbar />

        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <fieldset>
            <div className="form-name">
              <label>Name of Activity </label>
              <input value={activity.name} type="text" name="name" onChange={handleChange} required />
            </div>
            <div className="form-difficulty">
              <label>Difficulty (between 1 and 5) </label>
              <input value={activity.difficulty} type="number" id="Difficulty" name="difficulty" min="1" max="5" placeholder="1" onChange={handleChange}/>
            </div>
            <div className="form-duration">
              <label>Duration </label>
              <input value={activity.duration} type="time" name="duration" onChange={handleChange} />
            </div>
            <div className="form-season">
              <label>Choose a season </label>
              <select value={activity.season} id="season" name="season" onChange={handleChange}>
                <option value="Winter">Winter</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
              </select>
            </div>
            <div id="form-countries" className="form-countries">
              <label>Choose a country </label>
              <select multiple size="5" value={activity.countries} id="countries" name="countries" onChange={handleChange}>
                {dropdownMenu}
              </select>
            </div>
            <button className="form-btn" type="submit">Add Activity!</button>
          </fieldset>
      </form>
    </div>
  );
}


export default AddActivity;