const getAllArtists = require('./artistsGetAll.controller');
const artistsOwn = require('./artistOwn.controller')
const getByIdArtists = require('./artistsGetById.controller');
const getSonsByArtist = require('./artistsGetSongs.controller');
const ceateArtist = require('./artistsCreate.controller');
const searchArtists = require('./artistsSearch.controller');

module.exports = {
    ...getAllArtists,
    ...artistsOwn,
    ...getByIdArtists,
    ...getSonsByArtist,
    ...ceateArtist,
    ...searchArtists
}