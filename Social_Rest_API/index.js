//import the all packages 

const express=require('express');
const app=express();
const port=8000;
const mongoose=require('mongoose');
const detenv=require('dotenv');
const helmet=require('helmet');
const morgan=require('morgan');
const userRoute=require('./routes/users');
const authRoute=require('./routes/auth');
const postRoute=require("./routes/post");
const cors = require("cors")
const multer=require('multer');

detenv.config();

app.use(cors());

//create mongoDB connection 
// const mongoConnect=(MONGO_URL)=>{
//     mongoose.connect(process.env.MONGO_URL);
//     console.log('connected to mongo')
// }
// mongoConnect();
const connectTomdb = ()=>{
    try{
mongoose.connect('mongodb://0.0.0.0:27017/social_Media');
console.log("connected with mongoose");
    }
catch{
    console.log("somthing wrong");
}
}
connectTomdb();
//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/imeges")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    },
});


const upload=multer(storage);
app.post("/api/upload",upload.single("file"),(req,res)=>{
    try{
     return res.status(200).json("File uploaded successfully");
    }catch(err){
console.log(err);
    }
})


//routes
app.use('/api/users',userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);

// app.get("/",(req,res)=>{
// res.send("this is post 8000");
// });

//Listening http request on port 
app.listen(8000,()=>{
    console.log(`server is running on port no ${port}`);
});