const { get } = require("mongoose");
const fileModel = require("../models/filesModel");


const fileController = {
    async add(file){
        try {
            let newfile = new fileModel(file);
            let save = await newfile.save();
            return save;
        } catch (error) {
            throw error;
        }
    },

    async getAll(user){
        try {
            return await fileModel.find({user});// .select\unselect => מביא/לא מביא שדות ספציפיות
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    async getById(id){
        try {
            return await fileModel.find({_id:id});
        } catch (error) {
            throw error;
        }
    },

    async update(id,file){
        try {
            return await fileModel.updateOne({_id:id},file);
        } catch (error) {
            throw error;
        }
    },

    async delete(id){
        try {
            return await fileModel.deleteOne({_id:id});
        } catch (error) {
            throw error;
        }
    },



}
module.exports = fileController;