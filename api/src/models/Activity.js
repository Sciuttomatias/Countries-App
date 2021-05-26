const { DataTypes } = require('sequelize');
// Exporto una funcion que define el modelo
// Luego le inyecto la conexion a sequelize
module.exports = (sequelize) => {
  
  sequelize.define('activity', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    name: {
        type: DataTypes.STRING
    },
    difficulty: {   // ENUM
        type: DataTypes.INTEGER
      },
    duration: {
        type: DataTypes.TEXT
    },
    season: {
        type: DataTypes.STRING
    }
  });
};