let express = require('express');
let app = express();

// 1 middleware
app.use("/name",(req,res,next)=>{
    console.log("m1");
    next();
});

//2, middleware
// app.use("/name",(req,res,next)=>{
//     console.log("m2");
//     // res.send("sdf");
//    return next();

// })


app.use('/',(req,res,next)=>{
    req.timeNow = new Date(Date.now()).toString() ;
    console.log(req.timeNow)
    console.log(req.method, req.hostname,req.path);
    next();
});

app.listen(8080,()=>{
    console.log("listening")
});

app.get("/",(req,res)=>{
    res.send("hyy  i am the page");
})

app.get("/name",(req,res)=>{
    res.send("hyy  i am the name page");
})