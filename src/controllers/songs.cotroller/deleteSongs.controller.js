const { deleteFile } = require("../../config/cloudinary");
const { Song } = require("../../models");

const deleteSongs = async (req, res) => {
    const { song_id } = req.params;
    
    try {
        const song = await Song.findByPk(song_id);

        const result = await deleteFile(song.dataValues.cloudinaryPubicId);
        await song.destroy();
        res.status(200).json({
            message: "Song deleted successfully",
            result: result,
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error deleting song",
            error: error.message,
        });
    }
}

module.exports = {
    deleteSongs
};