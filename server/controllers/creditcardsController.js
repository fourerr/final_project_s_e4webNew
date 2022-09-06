const { get } = require("mongoose");
const creditcardModel = require("../models/creditcardsModel");


const creditcardController = {
    async add(creditcard){
        try {
            let newcreditcard = new creditcardModel(creditcard);
            let save = await newcreditcard.save();
            return save;
        } catch (error) {
            throw error;
        }
    },

    async getAll(){
        try {
            return await creditcardModel.find({});// .select\unselect => מביא/לא מביא שדות ספציפיות
        } catch (error) {
            throw error;
        }
    },

    async getById(id){
        try {
            return await creditcardModel.find({_id:id});
        } catch (error) {
            throw error;
        }
    },

    async update(id,creditcard){
        try {
            return await creditcardModel.updateOne({_id:id},creditcard);
        } catch (error) {
            throw error;
        }
    },

    async delete(id){
        try {
            return await creditcardModel.deleteOne({_id:id});
        } catch (error) {
            throw error;
        }
    },



}
module.exports = creditcardController