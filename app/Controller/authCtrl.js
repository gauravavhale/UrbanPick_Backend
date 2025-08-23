var express = require ('express')
var router = express.Router()
var srvcsLayer = require ('../Services/authSrvcs')

router.post('/signin', async function(req,res,next){
    try{
        const data = req.body
        const result = await srvcsLayer.signInUser(data)
        console.log(result ,'Controller')
        res.send(result)
    } catch(error){
        console.log(error)
    }
    
})

module.exports = router