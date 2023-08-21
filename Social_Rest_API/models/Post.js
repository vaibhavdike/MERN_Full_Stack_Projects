const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({

    userId:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        max:500,
        default:""
    },
    img:{
        type:String,
       default:""
    },
    like:{
        type:Array,
        default:[]
    },
},
{timestamps:true});

module.exports=mongoose.model("Post",postSchema);