const { get } = require("mongoose");
const loanModel = require("../models/loansModel");


const loanController = {
    async add(date,sum,id1,id2){
        try {
            let newloan = new loanModel(date,sum,id1,id2);
            let save = await newloan.save();
            return save;
        } catch (error) {
            throw error;
        }
    },

    async getAll(){
        try {
            return await loanModel.find({});// .select\unselect => מביא/לא מביא שדות ספציפיות
        } catch (error) {
            throw error;
        }
    },

    async getById(id){
        try {
            return await loanModel.find({_id:id});
        } catch (error) {
            throw error;
        }
    },

    async getByBankerId(id){
        try {
            return await loanModel.find({id_banker:id});
        } catch (error) {
            throw error;
        }
    },

    

    async update(id,loan){
        try {
            return await loanModel.updateOne({_id:id},loan);
        } catch (error) {
            throw error;
        }
    },

    async delete(id){
        try {
            return await loanModel.deleteOne({_id:id});
        } catch (error) {
            throw error;
        }
    },



}
module.exports = loanController;