import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import {useSelector} from 'react-redux';

import './Navbar.css';

function Navbar({onSearch}) {
  
    const countries = useSelector(store => store.countries);


    const onClick = (e) => {
      const continent = e.target.value;
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
                    {}
                    {/* <li><a href="#">Activity 1</a></li>
                    <li><a href="#">Activity 2</a></li> */}
                  </ul>
                </li>
                <li><a href="#">Continent</a>
                  <ul className="superSubMenu">
                      <li><button value="Africa" onClick={(e)=>onClick(e)}>Africa</button></li>
                      <li><button value="Americas" onClick={(e)=>onClick(e)}>America</button></li>
                      <li><button value="Asia" onClick={(e)=>onClick(e)}>Asia</button></li>
                      <li><button value="Europe" onClick={(e)=>onClick(e)}>Europe</button></li>
                      <li><button value="Oceania" onClick={(e)=>onClick(e)}>Oceania</button></li>
                      <li><button value="Polar" onClick={(e)=>onClick(e)}>Polar</button></li>
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
        <SearchBar onSearch={onSearch}/>
        
      </header>
    );
  }
  
  
  export default Navbar;