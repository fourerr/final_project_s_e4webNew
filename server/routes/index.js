var express = require('express');
var jwt = require('jsonwebtoken');
var userController=require('../controllers/usersController');
var creditcardController=require('../controllers/creditcardsController');
var {checkToken} = require("../jwtMiddleware")

var router = express.Router();

router.post("/login",
 async (req,res) => {
    try {
      let user=await userController.login(req.body.username,req.body.password);
      let token=jwt.sign({
        _id:user._id,
        role:user.role,
        name:user.name || ""
      },"EDENZAF",{expiresIn:"30d"});
      res.json({token,role:user.role})
    } catch (error) {
      res.status(401).json({ error });
    }
  });

  router.get("/chack-auth",checkToken,(req,res)=>{
    res.json({role:res.locals.userRole})
  })


module.exports = router;
