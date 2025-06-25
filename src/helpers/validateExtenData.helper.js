const validateData = async (data) =>{
    if (data.length <= 0) {
        throw new Error('Data not found');
    }
}

module.exports = {
    validateData
}