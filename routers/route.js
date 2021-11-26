const { response, request, json } = require('express');
const express = require('express');
const router = express.Router();
const model = require('../models/model')

router.get('/', async(request, response)=>{
    try{
         const datas =await model.find();
         response.json(datas);
    }catch{
      response.send('error '+ err)
    }
 });
 router.post('/',  async(request, response) =>{
     const data = new  model({
         name : request.body.name,
         tech: request.body.tech,
         sub: request.body.sub
     })
     try {
        console.log("helllooooo");
        const res = await data.save();
        response.json(res);
         
     } catch (error) {
         response.send(`error`);
     }
 })

 router.get('/:id', async(request, response)=>{
    try{
         const data =await model.findById(request.params.id);
         response.json(data);
    }catch{
      response.send('error '+ err)
    }
 });
 router.patch('/:id', async(request, response)=>{
    try{
         const data =await model.findById(request.params.id);
         data.sub = request.body.sub;
         const res = await data.save()
         response.json(data);
    }catch{
      response.send('error '+ err)
    }
 });

 router.delete('/:id', async(request, response)=>{
    try{
         const data =await model.findById(request.params.id);
         data.sub = request.body.sub;
         const res = await data.remove()
         response.json(data);
    }catch{
      response.send('error '+ err)
    }
 });

module.exports = router;