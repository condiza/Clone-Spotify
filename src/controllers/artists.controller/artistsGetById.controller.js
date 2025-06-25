const { validateData } = require("../../helpers/validateExtenData.helper");
const { Artist, Song } = require("../../models")

const getByIdArtist = async (res, req) => {
    
    const { id } = req.params;

    try {
        const artist = await Artist.findByPk(id, {
            include: {
                model: Song,
                as: 'songs',
                separate: true,
                order: [['createdAt', 'desc']]
            }
        });

        await validateData(artist);

        res.status(200).json(artists);

    } catch (error) {
        res.status(404).json({
            message: error.message || 'Error retrieving artists',
        });
    }

}

module.exports = {
    getByIdArtist
}