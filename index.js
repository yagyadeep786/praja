const express= require("express");
const app= express();
const ejs= require("ejs");

app.set('views', './public');
app.set('view engine', 'ejs'); 
app.use(express.static("./public/static"));

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/chat",(req,res)=>{
    res.render("chat");
})

app.get("/message",(req,res)=>{
    res.render("message");
})
app.listen(5000,()=>{
    console.log("I am running on port 5000");
})