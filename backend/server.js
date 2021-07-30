const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("./public/"));
app.use(cors());

//routes import
const adminroutes = require('./routes/adminroutes');
const userroutes = require('./routes/userroutes');

app.use('/controlpanel',adminroutes);
app.use('/',userroutes);


app.use("/",(req,res)=>{
    res.json("Saaspect is best!!!!");
});

app.listen(1500,()=>{
    console.log("hurrah 1500");
})
