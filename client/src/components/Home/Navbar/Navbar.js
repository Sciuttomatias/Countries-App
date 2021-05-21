import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {getCountriesByContinent, getCountriesByActivity} from '../../../actions/index'
import './Navbar.css';


function Navbar({onSearch}) {
  
    const countries = useSelector(store => store.countries);

    const activities = useSelector(store => store.activities);

    const dispatch = useDispatch();

    // useEffect(() => {
    //   console.log("Se montó");
    //   fetchData()
    //   return () => {
    //       console.log("Se desmontó");
    //   }
    // }, []);

    const onClick = (e) => {
      const value = e.target.value;
      if(value === "Africa" || value === "Americas" || value === "Asia" || value === "Europe" || value === "Oceania"|| value === "Polar"){
          dispatch(getCountriesByContinent(value));
      } else {
        console.log("Quiere filtrar por actividad " + value);
        dispatch(getCountriesByActivity(value))
      }
    }


    return (
      <header>
        <NavLink to="/countries" activeClassName="logo-link">
          <img className='logo' src="https://hypernoir.com/wp-content/uploads/2020/11/Henry.png" alt="logo"/>
        </NavLink>
        <nav>
          <ul className='mainMenu'> 
            <li><a href="/addActivity">Add Activity</a></li>
            <li className="dropdown"><a href="#" className="dropbtn">Filter by..</a>
              <ul className="subMenu">
                <li><a href="#">Things to do</a>
                  <ul className="superSubMenu">
                    {
                      activities && activities.map(activity =>{
                        return <li><button key={activity.id} value={activity.name} onClick={(e)=>onClick(e)}>{activity.name}</button></li>
                      })
                    }
                  </ul>
                </li>
                <li><a href="#">Continent</a>
                  <ul className="superSubMenu">
                      <li><button key={1}value="Africa" onClick={(e)=>onClick(e)}>Africa</button></li>
                      <li><button key={2}value="Americas" onClick={(e)=>onClick(e)}>America</button></li>
                      <li><button key={3}value="Asia" onClick={(e)=>onClick(e)}>Asia</button></li>
                      <li><button key={4}value="Europe" onClick={(e)=>onClick(e)}>Europe</button></li>
                      <li><button key={5}value="Oceania" onClick={(e)=>onClick(e)}>Oceania</button></li>
                      <li><button key={6}value="Polar" onClick={(e)=>onClick(e)}>Polar</button></li>
                    </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" className="dropbtn">Order by..</a>
              <div className="subMenu">
                <a href="#">Alphabetical A-Z</a>
                <a href="#">Alphabetical Z-A</a>
                <a href="#">Most populous</a>
                <a href="#">Less populous</a>
              </div>
            </li>
          </ul>
        </nav>



        {/* <div>
          <ul>
            {
              activities && activities.map(activity =>)
            }
          </ul>
        </div> */}




        <SearchBar onSearch={onSearch}/>
        
      </header>
    );
  }
  
  
  export default Navbar;