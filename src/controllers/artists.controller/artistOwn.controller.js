const { Artist } = require("../../models")


const ownArtists = async (req, res) => {
    try {
        const artists = await Artist.findAll({ userId: req.user.id })
        res.json(artists)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    ownArtists
}