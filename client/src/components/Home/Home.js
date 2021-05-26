import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {getCountries} from '../../actions'
import Countries from '../Countries/Countries';
import Pagination from './Pagination/Pagination'
import Navbar from './Navbar/Navbar'
import './Home.css';

function Home() {

    const countries = useSelector(store => store.countries);
    const activities = useSelector(store => store.activities);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(getCountries());
    }

    useEffect(() => {
        console.log("Se montó");
        fetchData()
        return () => {
            console.log("Se desmontó");
        }
    }, []);

    // Creo la variable con los países a mostrar por página
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    // Con esta función trabajo el cambio de página
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="Home">
            <Navbar activities={activities} countries={currentCountries}/>
            <h1>All around the world</h1>
            <Countries countries={currentCountries}/><br/>
            <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate}/>
        </div>
    );
}


export default Home;