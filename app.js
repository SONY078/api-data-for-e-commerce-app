const express = require('express');
const app = express();
const port = process.env.PORT||8080;
const DataRouter = require("./Routes/data")
const cors = require("cors")
app.use(cors())
app.use("/api",DataRouter)
app.get('/',(req,res)=>
{
    res.send('hello')
})



app.listen(port,function()
{
    console.log('application is running...')
})