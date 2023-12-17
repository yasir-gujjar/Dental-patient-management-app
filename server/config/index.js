const dotenv = require("dotenv").config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const AUTHTOKEN = process.env.AUTHTOKEN;
const ACCOUNTSID = process.env.ACCOUNTSID;
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    PORT,
    MONGO_URI,
    AUTHTOKEN,
    ACCOUNTSID,
    SECRET_KEY
};