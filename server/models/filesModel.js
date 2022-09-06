const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    source:{type:String,default:"user"},
    user:{type:mongoose.Schema.Types.ObjectId,required:true},
    name:{type:String,required:true}
})

module.exports = mongoose.model('File',userSchema);