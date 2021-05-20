import React from 'react'
import { Link } from 'react-router-dom';
import './ThingsToDo.css';
import {useSelector} from 'react-redux';



function ThingsToDo () {
    
    const countries = useSelector(store => store.countries);
    
    return (
        <li className="menu">
            <a href="#">Things to do</a>
            <ul className="submenu">
                <li>Article #1</li>
                <li>Article #2</li>
                <li>Article #3</li>
                <li>Article #4</li>
            </ul>
      </li>
    );

};
