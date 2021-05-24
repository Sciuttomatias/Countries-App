import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountryByName} from '../../../actions/index';
import './SearchBar.css';


function SearchBar() {

  const [ countrySearched, setCountrySearched ] = useState("");

  const dispatch = useDispatch();

  const onSearch = (countrySearched) => { 
    try {
        dispatch(getCountryByName(countrySearched));
    } catch(e) {
        console.log(e);
      }
  }

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(countrySearched);
        setCountrySearched("");
    }} className="elementsContainer">
      <input
        className="search"
        type="text"
        placeholder="Search countries.."
        value={countrySearched}
        onChange={e => setCountrySearched(e.target.value)}
        />
        <button className="btn" type="submit">Go!</button>
    </form>
  );
}

export default SearchBar;