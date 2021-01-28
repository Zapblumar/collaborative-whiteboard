const router = require('express').Router();
const apiRoutes = require('./api');
// const htmlRoutes = require('./html/html-routes');
const homeRoutes = require('./home-routes.js');
const profileRoutes = require('./profile-routes.js');
const boardRoutes = require('./single-board-routes.js');


// router.use('/', htmlRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
router.use('/board', boardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
