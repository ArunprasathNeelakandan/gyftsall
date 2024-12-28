const express = require('express')

const port = 3000
const app = express()


app.get('/api',(req,res)=>{
    res.send('aaaa')
})

app.listen(port,()=>{
    console.log('http://localhost:'+port)
})

