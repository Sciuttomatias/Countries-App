import axios from 'axios'

// CAPAZ TRABAJARLAS CON TRY/CATCH

export const getCountries = () => async (dispatch) => {
    try{
       const res = await axios.get("http://localhost:3001/countries");
       
       dispatch({ // ACÁ SE AGREGA UN DISPATCH PORQUE TENGO ALGO ASINCRÓNICO (EL AXIOS.GET)
        type: "GET_COUNTRIES",
        payload: res.data
    });
    } catch (e){
        console.log(e);
    }
}

//console.log(res.data.filter(x => x.continent === "Africa")[6].name);


export const getCountriesByContinent = (continent) => async (dispatch) => {
    try{
       const res = await axios.get("http://localhost:3001/countries");
       dispatch({ // ACÁ SE AGREGA UN DISPATCH PORQUE TENGO ALGO ASINCRÓNICO (EL AXIOS.GET)
        type: "GET_COUNTRIES_BY_CONTINENT",
        payload: res.data.filter(x => x.continent === continent)
    });
    } catch (e){
        console.log(e);
    }
}

export const getCountriesByActivity = (activity) => async (dispatch) => {
    try{
       const res = await axios.get("http://localhost:3001/countries");
       console.table(res.data[1]);
       dispatch({ // ACÁ SE AGREGA UN DISPATCH PORQUE TENGO ALGO ASINCRÓNICO (EL AXIOS.GET)
        type: "GET_COUNTRIES_BY_ACTIVITY",
        payload: res.data.filter(x => x.activities === activity)        // ALGO ESTA MAL ACÁ !!!!
    });
    } catch (e){
        console.log(e);
    }
}

export const getCountryById = (id) => async (dispatch) => {
    try{
        const res = await axios.get("http://localhost:3001/countries/" + id)
        dispatch({
            type: "GET_COUNTRY_BY_ID",
            payload: res.data
        });
    } catch (e){
        console.log(e);
    }                 
}


export const getCountryByName = (name) => {
    return function(dispatch) {
        return axios.get("http://localhost:3001/countries?name=" + name) 
        .then(countries => {
            dispatch({                              // EL DISPATCH ES PARA AVISARLE AL REDUCER QUE YA TENGO LOS DATOS, Y QUE SE ENCARGUE DE
                type: "GET_COUNTRY_BY_NAME",        // MODIFICAR EL STORE
                payload: countries.data
            });
        });
    }
}

export const addActivity = (activity) => async (dispatch) => {  // ¿ LE PASO ALGO COMO PARÁMETRO ?
    try{
       const res = await axios.post("http://localhost:3001/activity", activity)
       dispatch({                                       // ACÁ SE AGREGA UN DISPATCH PORQUE TENGO ALGO ASINCRÓNICO (EL AXIOS.POST)
        type: "ADD_ACTIVITY",
        payload: res.data                               // ¿ EN EL POST TAMBIEN ES NECESARIO EL .DATA (POR AXIOS) ?
    });
    } catch (e){
        console.log(e);
    }
}
