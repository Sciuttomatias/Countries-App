import { Link } from 'react-router-dom';
import './Home.css';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {getCountries, getCountryByName} from '../../actions'
import SearchBar from './Navbar/SearchBar';
import Country from '../Country/Country'


function Home() {

  // const [ firstGames, setFirstGames ] = useState([]);           // DEFINO UN ESTADO LOCAL
  const countries = useSelector(store => store.countries)     // ME TRAIGO LOS VIDEOGAMES DEL STORE
  const dispatch = useDispatch();                               // PERMITE USAR LAS ACTIONS



  const fetchData = () => {
    dispatch(getCountries());
  }

  useEffect(() => {
    console.log("Se montó")
    fetchData()   // ACÁ YA TENGO LOS DATOS GUARDADOS EN REDUX
    return () => {
      console.log("Se desmontó")
    }
  }, [])  // SE EJECUTA UNA UNICA VEZ

  
      return (
        <div className="Home">
          <h1>Countries</h1>
          <div>
            <ul className="Countries-ul">
              {
                countries && countries.map(country => {
                  return <Country key={country.id} image={country.image} name={country.name} continent={country.continent} id={country.id}/>
                })
              }
            </ul>
          </div>
        </div>
      );
      
}


export default Home;