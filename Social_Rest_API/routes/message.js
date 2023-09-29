const router=require('express').Router();
const  Message=require('../models/Message');


// store 

router.post("/",async(req,res)=>{
    const message=new Message(req.body);
    try{
       const savemessage= await message.save();
       res.status(200).json(savemessage);
    }catch(err){
        res.status(200).json(err);
    }
})

// get message


router.get("/:conversationId",async(req,res)=>{
    try{
         const messages= await Message.find({conversationId:req.params.conversationId});
         res.status(200).json(messages);
    }catch(err){
        res.status(200).json(err);
    }
})




module.exports=router;