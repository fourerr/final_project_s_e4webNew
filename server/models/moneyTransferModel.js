const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moneyTransferSchema = new Schema({
    date:{type:Date}, //, required:true, unique:true
    sum:{type:Number},
    id_sender:{type:mongoose.Schema.Types.ObjectId},
    id_receiver:{type:mongoose.Schema.Types.ObjectId}
})

module.exports = mongoose.model('MoneyTransfer',moneyTransferSchema);