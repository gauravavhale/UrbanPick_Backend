const mongo = require ('mongodb')

async function getProductsDao(){
    try{
        const mongoClient = mongo.MongoClient
        const mongoServer = await mongoClient.connect('mongodb+srv://avhalegaurav07:broispro.07@swift-cart.ajzmudj.mongodb.net/')
        const db = mongoServer.db('swift-cart')
        const collection = db.collection('product')
        const res = await collection.find({}).toArray();
        console.log(res)
        return res
    } catch (error) {
        console.error('Error in getProductsDao:', error.message);
        throw new Error('Failed to fetch products from database'); // pass error upward
    }
}

async function getProductsByCatDao(category){
    try{
        const mongoClient = mongo.MongoClient
        const mongoServer = await mongoClient.connect('mongodb+srv://avhalegaurav07:broispro.07@swift-cart.ajzmudj.mongodb.net/')
        const db = mongoServer.db('swift-cart')
        const collection = db.collection('product')
        const res = await collection.find({category : category}).toArray();
        console.log(res)
        return res
    } catch(error){
        console.error('Error fetching products by category:', error.message);
        throw new Error('Database query failed');
    }
}

module.exports = {
    getProductsDao,
    getProductsByCatDao
}