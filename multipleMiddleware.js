let express = require('express');

let app = express();

app.listen(8080,()=>{console.log("listening")});


// app.use("/new",(req,res,next)=>{
//     console.log("middleware");
//     let {id} = req.query;
//     if(id === "12"){
//       return  next();
//     }
//     res.send("acces denied");
// })

// app.get("/new",(req,res)=>{
//     res.send("permited");
// })









// creating a middleware
let check = (req,res,next)=>{
    console.log("middleware");
    let {id} = req.query;
    if(id === "12"){
      return  next();
    }
    res.send("acces denied");
}

// we can pass multiple middleware like this
app.get("/new",check,(req,res)=>{
    res.send("permited");
})