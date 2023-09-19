// const router=require('express').Router();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');



//update user
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            if (req.body.password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }
        } catch (err) {
            return res.status(404).json(err);
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body, }
            );

            res.status(200).json("account has been updated");
        }catch(err){
            return res.status(404).json(err);
        }

    } else {
        res.status("404").json("you can updat only your account");
    }
});




//delet user
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
             await User.findByIdAndDelete(req.params.id);
            res.status(200).json("account has been deleted");
        }catch(err){
            return res.status(404);
            console.log(err);
        }

    } else {
        res.status("404").json("you can delet only your account!");
    }
});







//get user

router.get("/",async (req,res)=>{
    const userId=req.query.userId;
    const username=req.query.username;
try{
const user=userId 
?await User.findById(userId) 
:await User.findOne({username: username});
const {password,updatedAt,createdAt,...other}=user._doc
res.status(200).json(other);
    }catch(err){
        res.status(404).json(err);
        console.log(err);
    }




});


//follow

router.put("/:id/follow",async (req,res)=>{
   if(req.body.userId !==req.params.id){
    try{
        const user=await User.findById(req.params.id);
        const currentUser=await User.findById(req.body.userId);
        if(!user.followers.includes(req.body.userId)){
            await user.updateOne({$push:{followers:req.body.userId}});
            await currentUser.updateOne({$push:{followings:req.params.id}});
            res.status(200).json("user has been followed");
        }
        else{
            res.status(404).json("you have Already follow this user");
        }

    }catch(err){
        return res.status(404).json(err);
    }
   }else{
    res.status(404).json("You cant follow your self");
   }
});

//unfollow

router.put('/:id/unfollow',async(req,res)=>{
    
     if(req.body.userId !== req.params.id){
        try{
           const user=await User.findById(req.params.id);
           const currentUser=await User.findById(req.body.userId);
           if(user.followers.includes(req.body.userId)){
               await user.updateOne({$pull:{followers:req.body.userId}});
               await currentUser.updateOne({$pull:{followings:req.params.id}});
               res.status(200).json("Unfollow user successfully");
           }
           else{
            res.status(404).json("You not followed by these user");
           }
        }catch(err){
            res.status(404).json(err);
        }
     }
     else{
        res.status(404).json("you cant unfollow your-self");
     }
    
});

module.exports = router;