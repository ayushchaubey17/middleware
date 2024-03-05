let express = require('express');

let app = express();

app.listen(8080,()=>{console.log("listening")})


app.get("/",(req,res)=>{
    x= x;
})



// default error
// ReferenceError: x is not defined
    // at D:\project\middleware\defaultHandler.js:9:5
    // at Layer.handle [as handle_request] (D:\project\middleware\node_modules\express\lib\router\layer.js:95:5)
    // at next (D:\project\middleware\node_modules\express\lib\router\route.js:149:13)
    // at Route.dispatch (D:\project\middleware\node_modules\express\lib\router\route.js:119:3)
    // at Layer.handle [as handle_request] (D:\project\middleware\node_modules\express\lib\router\layer.js:95:5)
    // at D:\project\middleware\node_modules\express\lib\router\index.js:284:15
    // at Function.process_params (D:\project\middleware\node_modules\express\lib\router\index.js:346:12)
    // at next (D:\project\middleware\node_modules\express\lib\router\index.js:280:10)
    // at expressInit (D:\project\middleware\node_modules\express\lib\middleware\init.js:40:5)
    // at Layer.handle [as handle_request] (D:\project\middleware\node_modules\express\lib\router\layer.js:95:5)