const router = require('express').Router(); 
const fileUpload = require('express-fileupload');

router.use(fileUpload({
    useTempFiles: true,
    tempFileDir: 'src/tmp',
}));

const { uploadSong, searchSongs, deleteSongs } = require('../../controllers/songs.cotroller');
const { checkToken } = require('../../helpers/middlewares');

router.post('/upload',checkToken,uploadSong);
router.post('/search',searchSongs);

router.delete('/:song_id',checkToken, deleteSongs)

module.exports = router