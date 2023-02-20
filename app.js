const express=require('express')
const port=8081
const app=express();

app.use('/user',require('./routes/users'))

app.get('/',(req,res)=>{
    res.send('hello')
})


app.listen(port,()=>{
    console.log("App is running "+port)
})