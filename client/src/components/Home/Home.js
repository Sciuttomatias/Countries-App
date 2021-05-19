import { Link } from 'react-router-dom';
import './Home.css';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {getCountries} from '../../actions'
import Countries from '../Countries/Countries';
import Pagination from './Pagination'

function Home() {

    const countries = useSelector(store => store.countries);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(getCountries());
    }

    useEffect(() => {
        console.log("Se montó")
        fetchData()   // ACÁ YA TENGO LOS DATOS GUARDADOS EN REDUX
        // setLocalCountries(countries)
        return () => {
            console.log("Se desmontó");
        }
    }, []);

    // Get current countries
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="Home">
            <h1>Countries</h1>
            <Countries countries={currentCountries}/><br/>
            <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate}/>
        </div>
    );
}


export default Home;