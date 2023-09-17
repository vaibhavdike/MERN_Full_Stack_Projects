const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');
const User=require('../models/User.js');
//create a post
router.post("/", async (req, res) => {
    const newpost = await new Post(req.body);
    try {
        const savedpost = await newpost.save();
        res.status(200).json(savedpost);
    } catch (err) {
        res.status(404).json(err);
    }
});


//update a post

router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await Post.findById(req.body.userId);
            await user.updateOne({ $set: req.body });
            res.status(200).json("Post updated successfully");


        } catch (err) {
            res.status(404).json(err);
        }
    }
    else {
        res.status(404).json("You can update only your post");
    }
});


//delet a post

router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await Post.findById(req.params.id);
            await user.deleteOne();
            res.status(200).json("post deleted successfully");
        }
        catch (err) {
            res.status(404).json(err);
        }
    }
    else {
        res.status(404).json("You can delet only your post");
    }
});



//like a post

router.put("/:id/like", async (req, res) => {
    
        try {
             const post =await Post.findById(req.params.id);
            if (!post.like.includes(req.body.userId)) {
                await post.updateOne({ $push: { like: req.body.userId }});
                res.status(200).json("Liked succssesfully");
            } else {
                await post.updateOne({$pull:{like:req.body.userId}});
                res.status(200).json("Unliked successfully");
            }
        } catch (err) {
            res.status(404).json(err);
        }
    
});


//get a post

router.get('/:id',async(req,res)=>{
    try{
          const post=await Post.findById(req.params.id);
          res.status(200).json(post);
    }catch(err){
        res.status(404).json(err);
    }
});

module.exports = router;


//get timeline post

router.get("/timeline/:userId",async(req,res)=>{
try{
    const currentUser=await User.findById(req.params.userId);
    const userPost=await Post.find({userId:currentUser.
        _id});

    const friendPost=await Promise.all(
        currentUser.followings.map((friendId)=>{
            return Post.find({userId:friendId});
        })
    );
    res.json(userPost.concat(...friendPost));
}catch(err){
    console.log(err);
 res.status(404).json(err);
}

});

