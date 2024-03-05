let fun = require('./apiToken');

// throwing an error
fun.app.use("/ram",(req,res)=>{
    throw new Error('access denied');
})

fun.app.get("/ram",(req,res)=>{
    abc =abc;

})