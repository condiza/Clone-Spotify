const Op = require('sequelize').Op;

const { Artist } = require('../../models');

const searchArtists = async (req, res) => {
    const { search } = req.body;

    try {
        Artist.findAll({
            where: {
                [Op.or]: [
                    { name: {[Op.iLike]: `%${search}%` } },
                    { bio: {[Op.iLike]: `%${search}%` } },
                ]
            }
        })
    } catch (error) {
        res.status(404).json({
            message: error.message || 'Error searching artists',
        });
    }

}
module.exports = {
    searchArtists
};