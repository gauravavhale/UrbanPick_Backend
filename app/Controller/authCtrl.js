var express = require ('express')
var router = express.Router()
var srvcsLayer = require ('../Services/authSrvcs')

router.post('/signin', async function(req,res,next){
    try{
        const data = req.body
        const result = await srvcsLayer.signInUser(data)
        res.status(201).json({
            success:true,
            user:result
        })
    } catch(error){
        if(error.message === 'User Already Exists'){
            return res.status(400).json({success:false, message:error.message})
        }
        res.status(500).json({success:false,message :'Internal Server Error'})
    }
})

router.post('/login', async function(req,res,next){
    try{
        const data = req.body
        const result = await srvcsLayer.loginUser(data)
        res.status(200).json({
            success:true,
            user:result
        })
    } catch(error){
        if (error.message === 'User Not Registered') {
             return res.status(404).json({ success: false, message: error.message });
    }

    if (error.message === 'Wrong Password') {
      return res.status(401).json({ success: false, message: error.message });
    }

    res.status(500).json({ success: false, message: 'Internal Server Error' });
    }                     
})

module.exports = router