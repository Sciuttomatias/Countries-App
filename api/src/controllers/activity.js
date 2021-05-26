const { Activity } = require('../db');
require('dotenv').config();

const addActivity = async (req,res,next) => {
    
    const { name, difficulty, duration, season, countries } = req.body;

    try {                          //¿ lo hago com un findOrCreate ?
        const createdActivity = await Activity.create({ name, difficulty, duration, season });

        createdActivity.addCountries(countries)// ¿ lo hago con un add o con un set ?

        return res.send(createdActivity);
        
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addActivity
}

