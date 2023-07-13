var express = require('express');
var router = express.Router();
var common = require("../helpers/_common");
var query = require("../models/query");
/* GET users listing. */
router.get('/getAllFeed', common.tokenMiddleware,async function(req, res, next) {
  const id = req._id;
  if(!id){
    res.json({status:false, msg:"Invalid"})
  }else{
    let response = await query.getAllFeed(id);
    if(!response){
      res.json({status : false, msg : "Something wrong" })
    }
    else{
    res.json({status:true,msg:"success",data:response});
    }
  }
  
});
module.exports = router;
