const express = require("express")
const app =  express()
const mongoose = require('mongoose');
const url ="mongodb+srv://keshabh:1234@cluster0.ynnua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const myschema = require('./LibSchema');
mongoose.connect(url).then(()=>console.log("connected to db"))
app.use(express.json())

app.post("/add-new-post",async(req,res)=>{
    const mybookname= req.body.Book_Name;
    const mynameofissuer=req.body.Name_of_Issuer;
    const myduedate=req.body.Due_Date;

    try{
      const newlibdata = new myschema(
          {
              Book_Name:mybookname,
              Name_of_Issuer:mynameofissuer,
              Due_Date:myduedate
          }
      )
      const saveddata=await newlibdata.save()
      res.json(
          {"message":"Libraray Data is saved","data":saveddata}
      )
    }
    catch(err){
     res.json(err);
    }
})

app.use("/",(req,res)=>{
    //res.send("Hello World!");
    res.json(
        {"message":"Express server is started"}
    )
})
app.listen(3000,()=>console.log("Express server started"))