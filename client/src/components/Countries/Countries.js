import Country from '../Country/Country'
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import './Countries.css';


function Countries({countries}) {
    // const countries = useSelector(store => store.countries);

    return(
        <div>
            <ul className="Countries-ul">
            {
                countries && countries.map(country => {
                    return <Country key={country.id} image={country.image} name={country.name} continent={country.continent} id={country.id}/>
                })
            }
            </ul>
        </div>
    )
}

export default Countries;