var daoLayer = require('../DAO/authDao')

async function signInUser(data){
    const res = await daoLayer.signInDao(data)
    return res
}

module.exports = {
    signInUser
}