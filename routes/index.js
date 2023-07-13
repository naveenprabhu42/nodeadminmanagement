var express = require('express');
var router = express.Router();
var query = require("../models/query");
var common = require("../helpers/_common")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',async function(req, res, next){
  const body = req.body;
  console.log(body,"apk")
  if(body.username !== ""){
    let response = await query.adminLoginValidation(body);
 
      if(!response){
        res.json({status : false, msg : "Something wrong" })
      }
      else{
        if(response.msg == "success"){
          var token = common.createPayload(response.data.id);
          if(token){
  
            res.json({status : true, msg : "LoggedIn Success" , data : {token : token}})
          }
        }else{
          res.json({status : false, msg : response.msg })
        }
      }

  }
})

router.get('/getAllUser', common.tokenMiddleware,async function(req, res, next) {
  const id = req._id;
  if(!id){
    res.json({status:false, msg:"Invalid"})
  }else{
    let response = await query.getAllUserDetails(id);
    if(!response){
      res.json({status : false, msg : "Something wrong" })
    }
    else{
    res.json({status:true,msg:"success",data:response});
    }
  }
  
});

router.get('/getAllFeed', common.tokenMiddleware,async function(req, res, next) {
  const id = req._id;
  if(!id){
    res.json({status:false, msg:"Invalid"})
  }else{
    let response = await query.getAllUserDetails(id);
    if(!response){
      res.json({status : false, msg : "Something wrong" })
    }
    else{
    res.json({status:true,msg:"success",data:response});
    }
  }
  
});


module.exports = router;
