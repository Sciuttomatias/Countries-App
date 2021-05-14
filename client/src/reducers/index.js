const initialState = {                  // ¿ CÓMO ARMO MI INITIAL STATE ? ¿ QUE COSAS TENGO QUE HACER DENTRO DE MI APP ?
    countries: [],
    countryDetail : {},
    activities: []        // Un array, que dentro va a tener muchos objetos, que son las distintas actividades que va agregando el usuario
};

function rootReducer(state = initialState, action) {        // EL ESTADO DEFAULT ES EL INITIAL STATE
    // DENTRO DE LAS ACTION, EL PAYLOAD ES OPTATIVO, EL TYPE ES OBLIGATORIO!
    if (action.type === "ADD_ACTIVITY") {
        return {
          ...state,
          activities: state.activities.concat(action.payload)  // ¿ A CORREGIR ?
        }
    }
    if (action.type === "GET_COUNTRIES") {
        return {
          ...state,
          countries: action.payload             // TENGO QUE VER CÓMO ME LLEGAN LOS DATOS DESDE EL BACKEND
        };
    }
    if (action.type === "GET_ALL_COUNTRIES") {
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