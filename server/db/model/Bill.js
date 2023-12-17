const mongoose = require("mongoose");

const Billschema = new mongoose.Schema({
    pname: {
        type: String,
        required: true
    },
    // phone no is string not number because it could'nt store first 0 value in database field
    pno: {
        type: String,
        required: true

    },
    disease: {
        type: String,
        required: true
    },
    sufferperiod: {
        type: String,
    },
    treatment: {
        type: String,
        required: true
    },
    bill: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    localdate: {
        type: Date,
        default: () => Date.now(),

    }


}, {
    timestamps: true
}
);
const Bills = mongoose.model("bills", Billschema, "bills");

module.exports = Bills;