import React from 'react'
import { Link } from 'react-router-dom';
import './ThingsToDo.css';
import {useSelector} from 'react-redux';



function ThingsToDo () {
    
    const countries = useSelector(store => store.countries);
    
    return (

        <li className="dropdown-submenu">
              <a href="#" className="dropbtn">Things to do</a>
              <div className="dropdown-submenu-content">
                {
                    countries && countries.map(country => {
                        return <a href="#">{country.id}</a>
                    })
                }
              </div>
            </li>
    );

};

export default ThingsToDo;