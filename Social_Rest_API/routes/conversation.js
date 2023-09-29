const express = require('express');
const router = express.Router();
const Conversation=require('../models/Conversation');


//create new conversation


router.post("/",async(req,res)=>{
const newconversation=new Conversation({
    members:[req.body.senderId,req.body.receiverId]
});

try{
      const saveconversation=await newconversation.save();
      res.status(200).json(saveconversation);
}catch(err){
    res.status(500).json(err);
}
  
});


// get conversation 


router.get("/:userId",async(req,res)=>{
    try{
    const conversation=await Conversation.find({members:{$in:[req.params.userId]}});
    res.status(200).json(conversation);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports=router;