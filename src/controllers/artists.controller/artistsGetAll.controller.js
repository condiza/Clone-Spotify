const { validateData } = require('../../helpers/validateExtenData.helper');
const { Artist, Song } = require('../../models');

const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll({
      include: {
        model: Song,
        as: 'songs',
        separate: true,
        order: [['createdAt', 'desc']]
      }
    });

    // Lanza error si no hay datos
    await validateData(artists);

    res.status(200).json(artists);
  } catch (error) {
    res.status(404).json({
      message: error.message || 'Error retrieving artists',
    });
  }
};

module.exports = {
  getAllArtists
};
