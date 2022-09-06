// connecting to the data from mongoDB
const mongoose = require("mongoose");
async function main(){
    await mongoose.connect("mongodb+srv://eden_cohen:12345@cluster0.vwl3z.mongodb.net/Task5?retryWrites=true&w=majority");
    console.log("mongoose connected"); 
}
main();