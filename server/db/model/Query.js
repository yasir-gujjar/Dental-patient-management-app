const mongoose = require("mongoose");

const Queryschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
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
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }

});

const Query = mongoose.model("queries", Queryschema, "patientqueries");
module.exports = Query;