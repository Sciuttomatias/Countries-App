const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),      // ¿ ESTA BIEN ESTO PARA EL CÓDIGO DE 3 LETRAS ? EN LA API APARECE COMO "alpha3Code"
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {              // EN LA API ÉSTO ESTÁ COMO "region"
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.INTEGER
    },
    population: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING,   // EN LA API APARECE COMO "flag"
      allowNull: false,
    }
  });
};
