const express = require('express');
const router  = express.Router();

const authRoutes = require('./authentication.controller');
const eventRoutes = require('./plans.controller');

router.use('/', authRoutes);
router.use('/events', eventRoutes);

module.exports = router;