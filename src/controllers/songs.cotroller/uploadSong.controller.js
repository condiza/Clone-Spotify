const { uploadFile } = require("../../config/cloudinary");
const { Song } = require("../../models");

const uploadSong = async (req, res) => {
  try {
    const result = await uploadFile(req.files.song);

    const song = await Song.create({
      ...req.body,
      cloudinaryPubicId: result.public_id,
      cloudinarySecureUrl: result.secure_url,
    });

    res.status(200).json(song);
  } catch (error) {
    res.status(500).json({
      message: "Error uploading song",
      error: error.message,
    });
  }
};

module.exports = {
  uploadSong,
};
