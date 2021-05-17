const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
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
        type: DataTypes.INTEGER     // ¿ PUEDO PONER TINYINT ? TIENE QUE SER ENTRE 1 Y 5..
      },
    duration: {
        type: DataTypes.TEXT       // ¿ QUÉ FORMATO TIENE LA DURACIÓN ?
    },
    season: {
        type: DataTypes.STRING
    }
  });
};