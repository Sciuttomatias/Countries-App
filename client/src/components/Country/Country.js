import React from 'react'
import { Link } from 'react-router-dom';

// ¿ QUÉ PUEDO PONER EN LA HREF DE MI BOTÓN "SHOW DETAIL" ? O ¿ USAR LINK PARA REDIRIGIR A TRAVES DEL BOTON DE "SHOW DETAIL" ?

function Country ({image, name, continent, id}) {

    return (
    <div className="country">
        <div className="image">
        <img className="imgCountry" src={image} width="80" height="80" alt="" />
        </div>
        <div className="country-body">
        <h5 className="country-title">{name}</h5>
        </div>
        <div>
        <h5>{continent}</h5>
        </div>
        <Link to={`/countryDetail/${id}`}><button>Show Detail</button></Link>
    </div>
    );

};

export default Country;