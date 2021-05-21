const initialState = {
    countries: [],
    page: 1,
    countryDetail : {},
    activities: []
};

function rootReducer(state = initialState, action) {
    // DENTRO DE LAS ACTION, EL PAYLOAD ES OPTATIVO, EL TYPE ES OBLIGATORIO!
    if (action.type === "ADD_ACTIVITY") {
        return {
          ...state,
          activities: state.activities.concat(action.payload)
        }
    }
    if (action.type === "GET_COUNTRIES") {
        return {
          ...state,
          countries: action.payload
        };
    }
    if (action.type === "GET_COUNTRIES_BY_CONTINENT") {
        return {
          ...state,
          countries: action.payload
        };
    }
    if (action.type === "GET_COUNTRIES_BY_ACTIVITY") {
        return {
          ...state,
          countries: action.payload
        };
    }
    if (action.type === "GET_COUNTRY_BY_ID") {
        return { 
            ...state,
            countryDetail: action.payload
        }
    }
    if (action.type === "GET_COUNTRY_BY_NAME") {
        return {
            ...state,
            countries: action.payload
        }
    }

    
    return state;
  }
  
  export default rootReducer;