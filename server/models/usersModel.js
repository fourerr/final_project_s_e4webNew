const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type:String, required:true, unique:true}, //unique = primery key
    password:{type:String, required:true},
    first_name:{type:String},
    last_name:{type:String},
    address:{type:String},
    city:{type:String},
    id_number:{type:Number},
    bank_name:{type:String},
    id_bank:{type:Number},
    num_acount:{type:Number},
    role:{type:String, default:"client"}
})

module.exports = mongoose.model('User',userSchema);