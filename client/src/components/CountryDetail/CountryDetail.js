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

      <div className="container-detail">
      <Navbar />
      <div className="country-detail">
        <img className="img-detail" src={countryDetail.image} alt="Image not found"/>
        <div className="below-image">
          <h2 className="name-detail">{countryDetail.name}</h2>
          <h3 className="id-detail">{countryDetail.id}</h3>
          <h3>{countryDetail.continent}, {countryDetail.subregion}</h3>
          <h3>Population: {countryDetail.population}</h3>
          <h3>Area: {countryDetail.area} km2</h3>
          <div className="detail-activities">
          {
            countryDetail.activities && countryDetail.activities.map(activity => {
              return (
                <div className="activities-detail">
                      <h3 className="activities-title">Things to do</h3>
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
        </div>
      </div>
    </div>
  );
}


export default CountryDetail;