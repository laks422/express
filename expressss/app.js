const Express=require('express');
var app=new Express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('bootstrap',{title:"ICT","names":["amal","arun","vinod"]});
});
app.get('/home',(req,res)=>{
    //res.send("hello welcome");
    res.render('bootstrap1');
});
app.get('/home/contact',(req,res)=>{
    //res.send("hello welcome");
    res.render('bootstrap2');
});
app.listen(3000,()=>
{
    console.log("Server running on http://localhost:3000");
});