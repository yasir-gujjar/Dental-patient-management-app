const {MONGO_URI} = require("../config/index");
const mongoose = require("mongoose");


async function main() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("connected");


    } catch (error) {
        console.log("try again, server connection error occured");
    }

}
module.exports = main;