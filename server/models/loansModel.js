const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loanSchema = new Schema({
    date:{type:Date}, //, required:true, unique:true
    sum:{type:Number},
    id_user:{type:mongoose.Schema.Types.ObjectId},
    id_banker:{type:mongoose.Schema.Types.ObjectId}
})

module.exports = mongoose.model('Loan',loanSchema);