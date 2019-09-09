const mongoose= require('mongoose');
const Schema=mongoose.Schema;
 
const TaskShema=new Schema({
    Nombre:String,
    Cedula:String,
    Telefono:String,
    Hab_cencilla:Number,
    Hab_dobles:Number,
    Hab_Vip:Number,
    status:{
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model('tasks',TaskShema);