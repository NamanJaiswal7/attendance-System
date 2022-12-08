var express = require('express');
var router = express.Router();
const memberModel = require('../models/members.model');

router.post('/', async function(req, res, next) {
const {name,email} = req.body
    let memberEmail = await memberModel.findOne({ "email": email });
    if(memberEmail){
      return res.status(409).json({message:"Email already exists"})
    }
   const newUser= new memberModel({
			email: req.body.email,
      name
		})
    newUser.save()
    res.status(200).json({message:"Succesfully added"})

     
  });
  router.get('/members', async function(req, res, next) {
    let members = await memberModel.find({},{});
    if(members.length){
     return res.status(200).json({message:"sucess",members})

    }
  });

module.exports = router;
