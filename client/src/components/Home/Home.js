import { Link } from 'react-router-dom';
import './Home.css';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {getCountries, getCountryByName} from '../../actions'
import Countries from '../Countries/Countries';
import Country from '../Country/Country'


function Home() { 

    const countries = useSelector(store => store.countries);
    const [currentPage, setCurrentPAge] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);

    const dispatch = useDispatch();


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

    //Get current countries
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    return (
        <div className="Home">
            <h1>Countries</h1>
            <Countries />
        </div>
    );
}


export default Home;