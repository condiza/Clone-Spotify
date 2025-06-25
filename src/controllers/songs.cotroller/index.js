const uploadSong = require('./uploadSong.controller');
const searchSongs = require('./searchSongs.controller');
const deleteSongs = require('./deleteSongs.controller');

module.exports = {
    ...uploadSong,
    ...searchSongs,
    ...deleteSongs
}