import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { addActivity, getCountries } from '../../actions/index'
import Navbar from '../Home/Navbar/Navbar';
import './AddActivity.css';

function AddActivity() {

  const countries = useSelector(store => store.countries)
  // ACTIVITIES ES UN ARRAY, AL QUE LE VAMOS A IR SUMANDO OBJETOS QUE VAN A SER LAS ACTIVITIES (ACTIVITIES LO TENGO EN EL STORE)
  const activities = useSelector(store => store.activities);
  // ¿ ESTA BIEN SI DEFINO UN ESTADO LOCAL QUE SEA UN OBJETO, LO POPULO CON LOS DATOS QUE LLENA EL USER EN EL FORM, 
  // Y DESPUES PUSHEO ESE OBJETO AL ACTIVITIES [] QUE TENGO EN EL STORE DE REDUX ?

  const [activity, setActivity] = useState({ name: "", difficulty: 0, duration: 0, season: "", countries: [] });
  // const [moreCountries, setMoreCountries] = useState(false);
  const dispatch = useDispatch();

  // ME TRAIGO LOS COUNTRIES PARA PODER USARLOS EN EL DROPDOWN MENU Y QUE EL USER PUEDA ELEGIR DE AHI LOS PAISES A AGREGAR
  const fetchCountries = () => {
    try{
      dispatch(getCountries());
    } catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    console.log("Se montó al Detail")
    fetchCountries()
    return () => {
      console.log("Se desmontó del Detail") // ¿ ACÁ DEBERIA EJECUTAR ALGO ?
    }
  }, [])

  // PARA QUE ME APAREZCAN LOS COUNTRIES EN EL DROPDOWN MENU DEL FORM ( Y NO TENER PROBLEMAS CON EL RENDERIZADO DE JSX ).
  // FALTA ORDENARLOS ALFABETICAMENTE..
  const dropdownMenu = [];
  for(const country of countries){
    dropdownMenu.push(<option key={country.id} value={country.id}>{country.name}</option>)
  }

  const addCountries = () => {
    // ACA VOY A TRABAJR UNA FUNCIÓN QUE LE PERMITA AL USUARIO SEGUIR AGRAGANDO COUNTRIES
    // ( OTRO DROPDOWN MENU, IGUAL AL ANTERIOR, PARA QUE SIGA AGREGANDO MÁS )
    

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addActivity(activity)); // 
  }

  const handleChange = (e) => {
    
    setActivity({
      ...activity,
      [e.target.name]: e.target.value   // ¿ Qué hace exactamente esta linea ? ¿ Cómo trabajo con el id de los paises (COL, ARG, CAN) ?
    })
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
              <label>Difficulty (beetween 1 and 5) </label>
              <input value={activity.difficulty} type="number" id="Difficulty" name="difficulty" min="1" max="5" onChange={handleChange}/>
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
              <select multiple size="5" value={activity.countries} id="countries" name="countries[]" onChange={handleChange}>
                {dropdownMenu}
              </select>
              <button type="button" onClick={addCountries}>Choose more countries!</button>
            </div>
            <button className="form-btn" type="submit">Add Activity!</button>
          </fieldset>
      </form>
    </div>
  );
}


export default AddActivity;