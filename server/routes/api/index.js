const router = require('express').Router();
const personRoutes = require('./persons');

router.use('/persons', personRoutes);

module.exports = router;
