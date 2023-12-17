const mongoose = require("mongoose");


const msgSchema = new mongoose.Schema({
    receiver: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("message", msgSchema, "messages");