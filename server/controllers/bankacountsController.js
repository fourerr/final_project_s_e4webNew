const { get } = require("mongoose");
const bankacountModel = require("../models/bankacountsModel");


const bankacountController = {
    async add(bankacount){
        try {
            let newbankacount = new bankacountModel(bankacount);
            let save = await newbankacount.save();
            return save;
        } catch (error) {
            throw error;
        }
    },

    async getAll(){
        try {
            return await bankacountModel.find({});// .select\unselect => מביא/לא מביא שדות ספציפיות
        } catch (error) {
            throw error;
        }
    },

    async getById(id){
        try {
            return await bankacountModel.find({_id:id});
        } catch (error) {
            throw error;
        }
    },

    async update(id,bankacount){
        try {
            return await bankacountModel.updateOne({_id:id},bankacount);
        } catch (error) {
            throw error;
        }
    },

    async delete(id){
        try {
            return await bankacountModel.deleteOne({_id:id});
        } catch (error) {
            throw error;
        }
    },



}
module.exports = bankacountController