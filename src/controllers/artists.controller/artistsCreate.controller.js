const { Artist } = require("../../models");

const createArtist = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    const artist = await Artist.create(req.body);

    res.status(200).json(artist);
  } catch (error) {
    res.status(404).json({
      message: error.message || 'Error creating artist',
    });
  }
};

module.exports = {
  createArtist
};
