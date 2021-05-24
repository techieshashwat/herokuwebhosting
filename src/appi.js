const path=require("path")
const express = require("express");
const ap = express();
const port=process.env.PORT ||80;
//console.log(__dirname);



const staticpath = path.join(__dirname,"../public");//path to public folder which constins statics files



ap.use(express.static(staticpath));//buildin middileware



ap.listen(port,()=>{
    console.log(`this app started successfully on port ${port}`)
    });




