const path=require('path');
const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const app=express();
//conectting db

mongoose.connect ('mongodb://localhost/ReservaHotel')
.then(db => console.log('Db connected'))
.catch(err => conosle.log(err));

 //import routs
const indexRoutes=require('./routes/index');
 

 //settings
app.set('port', process.env.PORT||3000);
app.set('views', path.join(__dirname,'views'));
app.set('views engine', 'ejs');
 
 //middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

 //routes 

app.use('/',indexRoutes);

//starting server 
 app.listen(app.get('port'),()=>{
     console.log(`server on port ${app.get('port')}`);
 });  