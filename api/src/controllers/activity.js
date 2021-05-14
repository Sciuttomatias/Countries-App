const { Activity } = require('../db');
require('dotenv').config();

const addActivity = async (req,res,next) => {
    const { 
        name,
        difficulty,
        duration,
        season,
        countries } = req.body; 
    try {
        const createdActivity = await Activity.create({
            name, 
            difficulty, 
            duration, 
            season
        });
        createdActivity.setCountries(countries) //   LE AGREGO LOS GENEROS MEDIANTE ESTE SETTER PARA CONECTAR LAS DOS TABLAS
        return res.send(createdActivity);

    } catch (error) {
        next(error);
    }
}

module.exports = {
    addActivity
}