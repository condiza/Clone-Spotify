const router = require('express').Router()

router.use('/users', require('./api/user.routes'));
router.use('/artists', require('./api/artist.routes'));

module.exports = router;