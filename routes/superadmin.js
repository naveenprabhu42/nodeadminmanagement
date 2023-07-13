var express = require('express');
var router = express.Router();
var common = require("../helpers/_common");
var query = require("../models/query");

/* GET users listing. */
router.post('/createUser',common.tokenMiddleware , async function(req, res, next) {
    try {
        const body = req.body;
        console.log(body,"apk")
        if(body.username !== "" && body.email !== "" && body.password !== "" && body.role !== ""){
          let response = await query.createNewUser(req);
            console.log(response,"res");
            if(!response){
              res.json({status : false, msg : "Something wrong" })
            }
            else{
              if(response.msg == "success"){
                res.json({status : true, msg : "New "+body.role+" Created" })
              }else{
                res.json({status : false, msg : response.msg })
    
              }
            }
      
        }else{
            res.json({status : false, msg : "Require fields" })
        }
    } catch (error) {
        res.json({status : false, msg : error })
    }

});

router.post('/updateUser',common.tokenMiddleware , async function(req, res, next) {
    try {
        const body = req.body;
        console.log(body,"apk")
        if(body.username !== "" && body.email !== "" && body.password !== "" && body.role !== ""){
          let response = await query.updateUser(req);
            console.log(response,"res");
            if(!response){
              res.json({status : false, msg : "Something wrong" })
            }
            else{
              if(response.msg == "success"){
                res.json({status : true, msg : body.role+" Updated" })
              }else{
                res.json({status : false, msg : response.msg })
    
              }
            }
      
        }else{
            res.json({status : false, msg : "Require fields" })
        }
    } catch (error) {
        res.json({status : false, msg : error })
    }

});

router.post('/deleteUser',common.tokenMiddleware , async function(req, res, next) {
    try {
        const body = req.body;
        console.log(body,"apk")
        if(body.username !== "" && body.email !== "" && body.password !== "" && body.role !== ""){
          let response = await query.deleteUser(req);
            console.log(response,"res");
            if(!response){
              res.json({status : false, msg : "Something wrong" })
            }
            else{
              if(response.msg == "success"){
                res.json({status : true, msg : body.username+" "+body.role+" Deleted" })
              }else{
                res.json({status : false, msg : response.msg })
    
              }
            }
      
        }else{
            res.json({status : false, msg : "Require fields" })
        }
    } catch (error) {
        res.json({status : false, msg : error })
    }

});
router.post('/modifyPermissionAccess',common.tokenMiddleware , async function(req, res, next) {
    try {
        const body = req.body;
        if(body.permission !== "" ){
          let response = await query.updateUser(req);
            console.log(response,"res");
            if(!response){
              res.json({status : false, msg : "Something wrong" })
            }
            else{
              if(response.msg == "success"){
                res.json({status : true, msg : body.role+" Updated" })
              }else{
                res.json({status : false, msg : response.msg })
    
              }
            }
      
        }else{
            res.json({status : false, msg : "Require fields" })
        }
    } catch (error) {
        res.json({status : false, msg : error })
    }

});
var express = require('express');
var router = express.Router();
var common = require("../helpers/_common");
var query = require("../models/query");
/* GET users listing. */
router.post('/createFeed',common.tokenMiddleware , async function(req, res, next) {
  try {
      const body = req.body;
      console.log(body,"apk")
      if(body.name !== "" && body.url !== "" ){
        let response = await query.createNewUser(req);
          console.log(response,"res");
          if(!response){
            res.json({status : false, msg : "Something wrong" })
          }
          else{
            if(response.msg == "success"){
              res.json({status : true, msg : "New "+body.role+" Created" })
            }else{
              res.json({status : false, msg : response.msg })
  
            }
          }
    
      }else{
          res.json({status : false, msg : "Require fields" })
      }
  } catch (error) {
      res.json({status : false, msg : error })
  }

});

router.post('/updateFeed',common.tokenMiddleware , async function(req, res, next) {
  try {
      const body = req.body;
      console.log(body,"apk")
      if(body.username !== "" && body.email !== "" && body.password !== "" && body.role !== ""){
        let response = await query.updateUser(req);
          console.log(response,"res");
          if(!response){
            res.json({status : false, msg : "Something wrong" })
          }
          else{
            if(response.msg == "success"){
              res.json({status : true, msg : body.role+" Updated" })
            }else{
              res.json({status : false, msg : response.msg })
  
            }
          }
    
      }else{
          res.json({status : false, msg : "Require fields" })
      }
  } catch (error) {
      res.json({status : false, msg : error })
  }

});

router.post('/deleteFeed',common.tokenMiddleware , async function(req, res, next) {
  try {
      const body = req.body;
      console.log(body,"apk")
      if(body.username !== "" && body.email !== "" && body.password !== "" && body.role !== ""){
        let response = await query.deleteUser(req);
          console.log(response,"res");
          if(!response){
            res.json({status : false, msg : "Something wrong" })
          }
          else{
            if(response.msg == "success"){
              res.json({status : true, msg : body.username+" "+body.role+" Deleted" })
            }else{
              res.json({status : false, msg : response.msg })
  
            }
          }
    
      }else{
          res.json({status : false, msg : "Require fields" })
      }
  } catch (error) {
      res.json({status : false, msg : error })
  }

});

module.exports = router;

