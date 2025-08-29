var daoLayer = require('../DAO/authDao')

async function signInUser(data){
    const res = await daoLayer.signInDao(data)
    return res
}

async function loginUser(data){
    const res = await daoLayer.loginDao(data)
    return res
}

module.exports = {
    signInUser,
    loginUser
}