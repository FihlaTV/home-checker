const router = require('express').Router();
const personRoutes = require('./persons');
const authRoutes = require('./auth');

router.use('/persons', personRoutes);
router.use('/auth', authRoutes);

module.exports = router;
