import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'


function Pagination({countriesPerPage, totalCountries, paginate}){
    const pageNumbers = [];
    
    for(let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination">
            {
                pageNumbers.map(number => {
                    return <NavLink key={number} onClick={()=> paginate(number)} to={`/countries?page=${number}`} activeClassName="pagination-number">{number}</NavLink>
                })
            }
        </nav>
    );
}

export default Pagination;