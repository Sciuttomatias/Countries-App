import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountryByName} from '../../../actions/index'

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
    }}>
      <input
        type="text"
        placeholder="Search countries.."
        value={countrySearched}
        onChange={e => setCountrySearched(e.target.value)}
        />
        <button type="submit">Go!</button>
        {/* <Link to="/countries/searched"><button>Go!</button></Link> */}
    </form>
  );
}



export default SearchBar;