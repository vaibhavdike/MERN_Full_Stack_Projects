const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        min:6,
        require:true,
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:"",
    },
    followers:{
        type:Array,
        default:[],
    },
    followings:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    desc:{
       type:String,
       max:50,
       default:"Hello my friend"
    },
    city:{
        type:String,
        max:50,
        default:""
    },
    from:{
        type:String,
        max:50,
        default:""
    },
    relationship:{
        type:Number,
        enum:[1,2,3],
    },
    
},
{timestamps:true}

);






module.exports=mongoose.model("User",UserSchema);