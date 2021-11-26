const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/CrudDB'

const app = express()

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', ()=>{
    console.log('connected...');
});
app.use(express.json());

 const dataRouter = require('./routers/route');
 app.use(express.json());
 app.use('/route', dataRouter);

app.listen(9000, ()=>{
    console.log('server started');
});