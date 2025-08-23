const getDbConnection = require('../Comman/Serviceprovider')

async function signInDao (data) {
    try{
        const db = await getDbConnection()
        const collection = db.collection('users')
        const res = await collection.insertOne(data)
        return res
    } catch(error){
        console.log(error)
    } 
}

module.exports = {
    signInDao
}