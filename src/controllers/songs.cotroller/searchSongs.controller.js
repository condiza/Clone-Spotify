const { Song } = require("../../models");
const { Op } = require("sequelize");


const searchSongs = async (req, res) => {
    const { search } = req.body;

    try {
        const songs = await Song.findAll({
            where:{
                title: {
                    [Op.like]: `%${search}%`
                }
            }
        });
        
        if (songs.length === 0) {
            return res.status(404).json({
                message: "No songs found"
            });
        }

        res.status(200).json(songs);

    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

module.exports  = {
    searchSongs
}