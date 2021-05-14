import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';

function Navbar({onSearch}) {
  
    return (
      <header>
        <NavLink to="/countries" activeClassName="logo-link">
          <img className='logo' src="https://hypernoir.com/wp-content/uploads/2020/11/Henry.png" alt="logo"/>
        </NavLink>
        <nav>
          <ul className='nav-links'>
            <li><a href="/addActivity">Add Activity</a></li>
            <li><a href="#">Filter by..</a></li>
            <li><a href="#">Order by..</a></li>
            <li> <SearchBar onSearch={onSearch}/> </li>
          </ul>
        </nav>
        <a className='about' href="/aboutMe"><button>About me</button></a>
      </header>
    );
  }
  
  
  export default Navbar;