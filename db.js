const mongoose=require("mongoose");

var mongoURL="mongodb+srv://vaishnavi:vaishnavi20@cluster0.mb4t5sh.mongodb.net/mern-pizza"

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})
var db=mongoose.connection
db.on('connected',()=>{
    console.log(`Mongo Db Connection Successfull`)
})

db.on('error',()=>{
    console.log(`Mongo DB Connection Failed`)
})

module.exports=mongoose