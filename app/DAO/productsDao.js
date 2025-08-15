const getDbConnection = require('../Comman/Serviceprovider')

async function getProductsDao(){
    try{
        const db = await getDbConnection()
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
        const db = await getDbConnection()
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