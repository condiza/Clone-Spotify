const router = require('express').Router();

const { getAllArtists, ownArtists, getByIdArtist, getSonsByArtist, createArtist, searchArtists } = require('../../controllers/artists.controller');
const { checkToken } = require('../../helpers/middlewares');

router.get('/', getAllArtists);
router.get('/own', checkToken, ownArtists);
router.get('/:id', getByIdArtist);
router.get('/songs/:artist_id', getSonsByArtist);

router.post('/', checkToken, createArtist);
router.post('/search', searchArtists);

module.exports = router;