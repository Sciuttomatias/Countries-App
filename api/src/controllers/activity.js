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
        const createdActivity = await Activity.create({     // ¿ lo hago com un findOrCreate ?
            name, 
            difficulty, 
            duration, 
            season
        });
        createdActivity.addCountries(countries)     // ¿ lo hago con un add ?
        return res.send(createdActivity);

    } catch (error) {
        next(error);
    }
}

module.exports = {
    addActivity
}