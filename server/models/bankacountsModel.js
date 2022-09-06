const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bankacountSchema = new Schema({
    num_acount:{type:Number}, //, required:true, unique:true
    ils:{type:Number},
    lev_coin:{type:Number},
    dollar:{type:Number}
})

module.exports = mongoose.model('Bankacount',bankacountSchema);