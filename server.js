const express=require('express');
   const pizzas=require('./client/models/pizzaModel') 
const db=require("./db")


 const app= express();
 app.use(express.json());

 app.get("/",(req,res)=>{
    res.send("Server working");
 });
 app.get("/getpizzas",(req,res)=>{
       pizzas.find({},(err,docs)=>{
         if(err){
            console.log(err)
         }
         else{
            res.send(docs)
         }
       })
 })
 const port=process.env.PORT || 7000;

app.listen(port,()=>`server running on port port`);