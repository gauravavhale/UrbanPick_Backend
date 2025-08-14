var DaoLAyer = require('../DAO/productsDao')

async function getProducts(){
        const res = await DaoLAyer.getProductsDao()
        return res
}

function getProductsByCat(category){
    const res = DaoLAyer.getProductsByCatDao(category)
    return res
}

module.exports = {
    getProducts,
    getProductsByCat
}