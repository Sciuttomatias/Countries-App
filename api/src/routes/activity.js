const { Router } = require('express');
const router = Router();
const { addActivity } = require('../controllers/activity');

router.post('/', addActivity);

module.exports = router;