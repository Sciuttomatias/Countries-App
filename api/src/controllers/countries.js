const { Country, Activity } = require('../db');
require('dotenv').config();
const { Op } = require('sequelize');


const getCountries = (req, res) => {
    if(!req.query.name){                    // El usuario busca todos los countries
        try {
            Country.findAll({ 
                include: {model: Activity}
            })
            .then((result) => {
                let countries = [];
                for(let i = 0; i < result.length; i++){
                    let country = {
                        image : result[i].image,
                        name : result[i].name,
                        continent: result[i].continent,
                        id: result[i].id,
                        population: result[i].population,
                        activities: result[i].activities // ¿ Cómo accedo a las activities ?
                    }
                    countries.push(country);
                }
                res.status(200).send(countries);
            })
     
        } catch(e){
            console.log("No se pudo realizar la petición HTTP correctamente " + e)
        }
/*---------------------- El usuario busca por nombre /countries?name=argentina ---------------------*/
    } else {
        
        let queryName = req.query.name;
        try {
            Country.findAll({ 
                where: {name: {[Op.iLike]: `%${queryName}%`}},
                include: {model: Activity}
            })
            .then((result) => {
                let countries = [];
                for(let i = 0; i < result.length; i++){
                    let country = {
                        image : result[i].image,
                        name : result[i].name,
                        continent: result[i].continent,
                        id: result[i].id,
                        population: result[i].population,
                        activities: result.activities
                    }
                    countries.push(country);
                }
                res.status(200).send(countries);
            })
        } catch {
            res.status(404).send("Country not found!");
        }
    }
}


const getCountriesById = (req, res) => {
    try {
        let queryId = req.params.id.toUpperCase();
        Country.findOne({
            where: {id: queryId},
            include: {model: Activity}
        })
        .then((result) => {
            res.status(200).send(result);
        })
        } catch(e){
        console.log("No se pudo realizar la petición HTTP correctamente " + e);
    }
}


module.exports = {
    getCountries,
    getCountriesById
}