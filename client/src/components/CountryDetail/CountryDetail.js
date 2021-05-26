import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountryById } from '../../actions'
import { useParams } from 'react-router';
import Navbar from '../Home/Navbar/Navbar';
import './CountryDetail.css';

function CountryDetail() {

  const countryDetail = useSelector(store => store.countryDetail)
  const dispatch = useDispatch(); // Me permite usar las actions
  const { id } = useParams();     // Con este hook agarro el id que tengo en la url

  const fetchDetail = (id) => {
    try{
      dispatch(getCountryById(id));
    } catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    console.log("Se montó al Detail")
    fetchDetail(id)
    return () => {
      console.log("Se desmontó del Detail")
    }
  }, [])
  
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
                    <h3>{activity.difficulty}/5</h3>
                    <h3>{activity.duration} hrs</h3>
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