 const express= require('express');
const router=express.Router();

const Task = require( '../models/task');

router.get('/',async (req,res) =>{
  const task= await Task.find();
res.render('index.ejs', {
  task
});
});

router.post('/add', async(req,res)=>{
    //console.log(new Task(req.body)); 
  const task = new Task(req.body);
  await task.save();
  res.send('enviado')
});
 const nu=10;

module.exports=router;