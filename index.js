const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.sendFile('home.html',{root:__dirname})
    // res.sendFile('/home.html')
    
})

app.listen(process.env.PORT || 3000)
