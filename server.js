const express = require('express');
// const serveStatic  = require('serve-static')
const bodyParser= require('body-parser');
const app = express();
const device = require('express-device');

app.use(device.capture())
app.use(bodyParser.urlencoded({extended:false}));
let i=0;
// app.set('views');
app.use((req,res, next) => {
    console.log(i)
    i++;
    // console.log(req.device);
    next();
})
app.use(express.static('views'))
app.listen(5000, () =>{
    console.log('Listening on port 5000')
});