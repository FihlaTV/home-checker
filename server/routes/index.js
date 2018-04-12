const router = require('express').Router();
const personRoutes = require('./api/persons');

// Person routes
router.use('/persons', personRoutes);

module.exports = router;
