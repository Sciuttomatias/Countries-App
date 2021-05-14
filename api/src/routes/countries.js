const { Router } = require('express');
const router = Router();
const { getCountries, getCountriesById, getCountriesByName } = require('../controllers/countries');

router.get('/', (getCountries));
router.get('/:id', getCountriesById);

module.exports = router;