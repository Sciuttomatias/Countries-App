import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { getCountryByName} from '../../../actions/index'

function SearchBar() {

  const [ countrySearched, setCountrySearched ] = useState("");

  const dispatch = useDispatch();

  const onSearch = (countrySearched) => { 
    try {
        dispatch(getCountryByName(countrySearched));  // MEDIANTE EL DISPATCH CAMBIO LO QUE TENGO EL STORE
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
      <input type="submit" value="Go!" />
    </form>
  );
}



export default SearchBar;