const router = require('express').Router();
const personRoutes = require('./api/persons');
const apiRoutes = require('./api/api');

// API Routes
router.use('/api', apiRoutes);

// Person routes 'api/persons' ?
router.use('/persons', personRoutes);

module.exports = router;
