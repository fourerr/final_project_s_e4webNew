const { get } = require("mongoose");
const moneyTransferModel = require("../models/moneyTransferModel");


const moneyTransferController = {
    async add(moneyTransfer){
        try {
            let newMoneyTransfer = new moneyTransferModel(moneyTransfer);
            let save = await newMoneyTransfer.save();
            return save;
        } catch (error) {
            throw error;
        }
    },

    async getAll(){
        try {
            return await moneyTransferModel.find({});// .select\unselect => מביא/לא מביא שדות ספציפיות
        } catch (error) {
            throw error;
        }
    },

    async getById(id){
        try {
            return await moneyTransferModel.find({_id:id});
        } catch (error) {
            throw error;
        }
    },

    async getByBankerId(id){
        try {
            return await moneyTransferModel.find({id_banker:id});
        } catch (error) {
            throw error;
        }
    },

    

    async update(id,moneyTransfer){
        try {
            return await moneyTransferModel.updateOne({_id:id},moneyTransfer);
        } catch (error) {
            throw error;
        }
    },

    async delete(id){
        try {
            return await moneyTransferModel.deleteOne({_id:id});
        } catch (error) {
            throw error;
        }
    },



}
module.exports = moneyTransferController;