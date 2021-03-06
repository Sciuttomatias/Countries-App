import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import {useSelector, useDispatch} from 'react-redux';
import { getCountriesByContinent,
         getCountriesByActivity, 
         getCountriesByAlphabet, 
         getCountriesByPopulation } from '../../../actions/index'
import './Navbar.css';


function Navbar({onSearch}) {

    const activities = useSelector(store => store.activities);

    const dispatch = useDispatch();

    const onClick = (e) => {

      const value = e.target.value;

      if(value === "Africa" || value === "Americas" || value === "Asia" || value === "Europe" || value === "Oceania"|| value === "Polar"){
          dispatch(getCountriesByContinent(value));
      } else if(value === "Alphabetical A-Z" || value === "Alphabetical Z-A") {
        if(value === "Alphabetical A-Z"){
          dispatch(getCountriesByAlphabet("ASC"));
        } else { dispatch(getCountriesByAlphabet("DESC")); }
      } else if(value === "Most populous" || value === "Less populous"){
        if(value === "Most populous"){
          dispatch(getCountriesByPopulation("ASC"));
        } else {
          dispatch(getCountriesByPopulation("DESC"));
        }
      }
      else {
        dispatch(getCountriesByActivity(value));
      }
    }

    return (
      <ul className='nav'> 
        <NavLink to="/countries"><img className='logo' src="https://hypernoir.com/wp-content/uploads/2020/11/Henry.png" alt="logo"/></NavLink>
        <NavLink to="/addActivity" className="add-activity">Add Activity</NavLink>
        <li className="dropdown"><a href="#" className="dropbtn">Filter by..</a>
          <ul className="subMenu">
            <li><a className="activities-continent" href="#">Activities</a>
              <ul className="superSubMenu">
                {
                  activities && activities.map(activity => {
                    return <button value={activity.name} key={activity.id} onClick={onClick}>{activity.name}</button>
                  })
                }
              </ul>
            </li>
            <li><a className="activities-continent" href="#">Continent</a>
              <ul className="superSubMenu">
                  <li><button key={1} value="Africa" onClick={(e)=>onClick(e)}>Africa</button></li>
                  <li><button key={2} value="Americas" onClick={(e)=>onClick(e)}>America</button></li>
                  <li><button key={3} value="Asia" onClick={(e)=>onClick(e)}>Asia</button></li>
                  <li><button key={4} value="Europe" onClick={(e)=>onClick(e)}>Europe</button></li>
                  <li><button key={5} value="Oceania" onClick={(e)=>onClick(e)}>Oceania</button></li>
                  <li><button key={6} value="Polar" onClick={(e)=>onClick(e)}>Polar</button></li>
                </ul>
            </li>
          </ul>
        </li>
        <li className="dropdown"><a href="#" className="dropbtn">Order by..</a>
          <ul>
            <li><button key={1} value="Alphabetical A-Z" onClick={(e)=>onClick(e)}>Alphabetical A-Z</button></li>
            <li><button key={2} value="Alphabetical Z-A" onClick={(e)=>onClick(e)}>Alphabetical Z-A</button></li>
            <li><button key={3} value="Most populous" onClick={(e)=>onClick(e)}>Most populous</button></li>
            <li><button key={4} value="Less populous" onClick={(e)=>onClick(e)}>Less populous</button></li>
          </ul>
          
        </li>
        <SearchBar onSearch={onSearch}/>
      </ul>
    );
  }
  
  export default Navbar;