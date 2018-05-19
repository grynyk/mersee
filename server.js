const express = require('express');
const app = express();

const port = process.env.port || 8080;



app.get('/port', (req, res)=>{
    const st = 12;
    console.log(st);
    res.status(200);
    res.send(12);
})

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})