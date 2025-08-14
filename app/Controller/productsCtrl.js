var express = require('express')
var router = express.Router()
var SrvcsLayer = require('../Services/productsSrvcs')

router.get('/products',async function(req,res,next){
    try{
        const result = await SrvcsLayer.getProducts()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get('/products-by-category/:category', async function(req,res,next){
    try{
        const category = req.params.category
        if (!category) {
            return res.status(400).json({ error: 'Category parameter is required' });
        }
        const result = await SrvcsLayer.getProductsByCat(category)
        res.status(200).json(result)
    } catch(error){
        console.error('Error in /products-by-category route:', error);

        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message || 'Something went wrong'
        });
    }
    
})

module.exports = router;