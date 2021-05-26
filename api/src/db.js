require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const { COUNTRIES_URL } = require('../constants');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Inyecto la conexión (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizo los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos, hago un destructuring
const { Country, Activity } = sequelize.models;

/*--------- Relaciones de sequelize entre modelos ---------------- */
Country.belongsToMany(Activity, {through: "country_activity"});
Activity.belongsToMany(Country, {through: "country_activity"});

/*-- Apenas se inicia el servidor, me traigo todo de la API EXTERNA y populo mi DB -- */
try{
  axios.get(COUNTRIES_URL)
  .then((result) => {
      let countries = [];
      for(let i = 0; i < result.data.length; i++){
          let country = {
              image : result.data[i].flag,
              name : result.data[i].name,
              id: result.data[i].alpha3Code,
              continent: result.data[i].region,
              capital: result.data[i].capital,
              subregion: result.data[i].subregion,
              area: result.data[i].area,
              population: result.data[i].population
          }
          countries.push(country);
      }
      Country.bulkCreate(countries)
      .then((res) => {
          console.log("Se inyectaron los countries a mi Base de Datos!");
      })
  })
} catch (e){
  console.log("No se pudo realizar la petición HTTP correctamente.." + e)
}


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};