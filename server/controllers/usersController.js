const userModel = require("../models/usersModel");
const mongoose = require("mongoose");
const userController = {
  async login(username, password) {
    try {
      let user = await userModel.findOne({ username, password });
      if (user) {
        return user;
      } else {
        throw "no user found";
      }
    } catch (error) {
      throw error;
    }
  },
  async add(user) {
    try {
      let newUser = new userModel(user);
      let save = await newUser.save();
      return save;
    } catch (error) {
      throw error;
    }
  },
  async getAll() {
    try {
      return await userModel.find({});
    } catch (error) {
      throw error;
    }
  },
  async getById(id) {
    try {
      return await userModel.find({ _id: id });
    } catch (error) {
      throw error;
    }
  },
  async update(id, user) {
    try {
      return await userModel.updateOne({ _id: id }, user);
    } catch (error) {
      throw error;
    }
  },
  async delete(id) {
    try {
      return await userModel.deleteOne({ _id: id });
    } catch (error) {
      throw error;
    }
  },

  async updatePassword(id, newPass, oldPass) {
    const userData = await userModel.findOne({
      _id: mongoose.Types.ObjectId(id),
    });

    const isValid = userData && userData.password === oldPass;
    console.log(userData.password);
    console.log(oldPass);

    console.log(isValid);
    if (!isValid) {
      throw new Error("Password is invalid");
    }

    return await userModel.updateOne(
      { _id: id },
      {
        $set: {
          password: newPass,
        },
      }
    );
  },
};
module.exports = userController;
