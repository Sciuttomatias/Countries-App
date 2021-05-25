import React from 'react'
import { Link } from 'react-router-dom';
import './Country.css';

// ¿ QUÉ PUEDO PONER EN LA HREF DE MI BOTÓN "SHOW DETAIL" ? O ¿ USAR LINK PARA REDIRIGIR A TRAVES DEL BOTON DE "SHOW DETAIL" ?

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