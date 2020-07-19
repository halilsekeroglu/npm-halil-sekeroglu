const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res) {
  res.sendFile(__dirname+ "/index.html");
}) ;
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+ "/bmicalculator.html")
})

app.post("/",function(req,res){
    var number1=Number(req.body.num1);
    var number2=Number(req.body.num2);
    var result=number1+number2;

    res.send("your result : " + result);
});
app.post("/bmicalculator",function(req,res){
  var height=Number(req.body.height);
  var weight=Number(req.body.weight);
  var result=height*height/weight;
  res.send("your BMI is :" + result);
})
app.listen(3000,function(){
  console.log("started on the port 3000");
});
