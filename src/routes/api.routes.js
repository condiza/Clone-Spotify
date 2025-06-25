const router = require('express').Router()

router.use('/users', require('./api/user.routes'));
router.use('/artists', require('./api/artist.routes'));
router.use('/songs', require('./api/songs.routes'));

module.exports = router;