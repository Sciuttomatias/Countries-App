import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import ThingsToDo from '../ThingsToDo/ThingsToDo';
import './Navbar.css';

function Navbar({onSearch}) {
  
    return (
      <header>
        <NavLink to="/countries" activeClassName="logo-link">
          <img className='logo' src="https://hypernoir.com/wp-content/uploads/2020/11/Henry.png" alt="logo"/>
        </NavLink>
        <nav>
          <ul className='nav-links'>
            <li><a href="/addActivity" className="dropbtn">Add Activity</a></li>
            <li className="dropdown">
              <a href="#" className="dropbtn">Filter by..</a>
              <div className="dropdown-content">
                <a href="#"> <ThingsToDo /> </a>
                <a href="#">Continent</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#" className="dropbtn">Order by..</a>
              <div className="dropdown-content">
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