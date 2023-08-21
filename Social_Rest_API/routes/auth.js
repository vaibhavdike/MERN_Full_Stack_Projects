const User = require('../models/User');
const bcrypt=require('bcrypt');
const router=require('express').Router();
//Register
router.post('/register', async  (req,res)=>{
 
  try{
   //create a new encrepted password

   const salt=await bcrypt.genSalt(10);
   const hashedpassword=await bcrypt.hash(req.body.password,salt);

//creating new user
const newUser= await new User({
   username:req.body.username,
   email:req.body.email,
   password:hashedpassword,
  })


//save the user in mongodb
  const user= await newUser.save();
  res.status(200);
  res.send("OK");
  }
  catch(err){
   console.log(err);
  }
});



//Login

router.post('/login', async (req,res)=>{
   try{
   const user= await User.findOne({email:req.body.email});
   !user && res.status(404).json("User not found");
    
   const validpassword= await bcrypt.compare(req.body.password,user.password);
   !validpassword && res.status(400).json("wrong pass");
   res.status(200).json(user);
   }
   catch(err){
      console.log(err);
   }
})



module.exports=router;