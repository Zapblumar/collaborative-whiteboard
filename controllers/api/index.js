const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const boardRoutes = require('./board-routes.js');

router.use('/users', userRoutes);
router.use('/boards', boardRoutes);

module.exports = router;
