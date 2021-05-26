import React from 'react'
import { Link } from 'react-router-dom';
import './Country.css';

function Country ({image, name, continent, id}) {
    return (
    <div className="country">
        <img className="imgCountry" src={image} alt="" />
        <h5 className="country-title">{name}</h5>
        <h5>{continent}</h5>
        <Link to={`/countryDetail/${id}`}><button className="btn-showDetail">Details</button></Link>
    </div>
    );
};

export default Country;