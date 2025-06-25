const cloudinary = require('cloudinary').v2;
const randomstring = require('randomstring');
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: false
});

const uploadFile = async (filePath) => {
    return cloudinary.uploader.upload(filePath.tempFilePath, {
        folder: 'codetunes',
        public_id: randomstring.generate(15),
        resource_type: 'auto',
    })
};

const deleteFile = async (public_id) => {
    return cloudinary.uploader.destroy(public_id, {
        resource_type: 'video',
    });
}

module.exports = {
    uploadFile,
    deleteFile
};