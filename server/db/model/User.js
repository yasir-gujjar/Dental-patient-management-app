const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
}

);
// module.exports =
const User = mongoose.model("User", Userschema, "users");

module.exports = User;