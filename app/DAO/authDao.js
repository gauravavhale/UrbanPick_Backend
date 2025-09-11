const getDbConnection = require('../Comman/Serviceprovider')

async function signInDao (data) {
    try{
        const db = await getDbConnection()
        const collection = db.collection('users')
        const existingUSer = await collection.findOne({email : data.email})
        if(existingUSer){
            throw new Error ('User Already Exists, Try Login')
        }
        const regUser = await collection.insertOne(data)
        if(regUser.acknowledged){
            const res = await collection.findOne({_id : regUser.insertedId})
            const {password, ...user} = res
            return user
        } else {
            return null
        }
    } catch(error){
        console.log(error)
        throw error
    } 
}

async function loginDao(data){
    try{
        const db = await getDbConnection()
        const collection = db.collection('users')
        const result = await collection.findOne({email : data.email})
        if(!result){
        throw new Error('User Not Registered')
        }
        if(result.password !== data.password){
        throw new Error('Wrong Password')
        }
        const { password , ...user } = result
        return user
    } catch (error){
        console.error(error.message);
        throw error;
    }
}

module.exports = {
    signInDao,
    loginDao
}