import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { getCountryById } from '../../actions'
import { useParams } from 'react-router';
import Navbar from '../Home/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './CountryDetail.css';

function CountryDetail() {

  const countryDetail = useSelector(store => store.countryDetail)   // ME TRAIGO EL COUNTRY DETAIL DEL STORE : {}
  const dispatch = useDispatch();                                   // ME PERMITE USAR LAS ACTIONS
  const { id } = useParams();                                       // USO EL ID QUE TENGO EN LA URL CON ESTE HOOK

  const fetchDetail = (id) => {
    try{
      dispatch(getCountryById(id));
    } catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    console.log("Se montó al Detail")
    fetchDetail(id)                         // ACÁ YA TENGO LOS DATOS GUARDADOS EN REDUX
    return () => {
      console.log("Se desmontó del Detail")
    }
  }, [])  // SE EJECUTA UNA UNICA VEZ

  

    return (

      <div className="country-detail">
          <Navbar />
        <h1>Country Detail</h1>
        <ul>
            <img className="flag" src={countryDetail.image} alt="Image not found"/>
            <h2>{countryDetail.name}</h2>
            <h3>{countryDetail.id}</h3>
            <h3>{countryDetail.continent}, {countryDetail.subregion}</h3>
            <div>
            {
                countryDetail.activities && countryDetail.activities.map(activity => {
                return (
                    <div>
                        <h4>{activity.name}</h4>
                        <h3>{activity.difficulty}</h3>
                        <h3>{activity.duration}</h3>
                        <h3>{activity.season}</h3>
                        <h3>{activity.countries}</h3>
                    </div>
                )
                })
            }
            </div>
            <h3>Population: {countryDetail.population}</h3>
            <h3>Area: {countryDetail.area} km2</h3>
        </ul>

      </div>
  );
}


export default CountryDetail;