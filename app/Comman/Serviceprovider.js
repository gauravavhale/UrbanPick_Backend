const mongo = require ('mongodb')
require('dotenv').config();

async function getDbConnection(){
    const url = process.env.MONGODB_URI;
    const mongoClient = mongo.MongoClient
    const mongoServer = await mongoClient.connect(url)
    const db = mongoServer.db('swift-cart')
    return db
}

module.exports=getDbConnection

