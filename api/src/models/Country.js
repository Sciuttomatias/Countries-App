const { DataTypes } = require('sequelize');
// Exporto una funcion que define el modelo
// Luego le inyecto la conexion a sequelize
module.exports = (sequelize) => {
  
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
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
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};