let express = require('express');

let app = express();

app.listen(8080,()=>{console.log("listening")})

app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "ram"){
        return next();}

  res.send("Access denied")

})

app.get("/api",(req,res)=>{
    res.send("data ");
})

