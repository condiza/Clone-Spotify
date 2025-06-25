const { validateData } = require("../../helpers/validateExtenData.helper");
const { Song } = require("../../models")

const getSonsByArtist = async (res, req) => {

    const {artist_id} = req.params;

try {
        const songs = await Song.findAll({artistId: artist_id});
        
        await validateData(songs);
        
        res.status(200).json(songs);
    
} catch (error) {
        res.status(404).json({
      message: error.message || 'Error retrieving songs',
    });
}}

module.exports = {
    getSonsByArtist
}