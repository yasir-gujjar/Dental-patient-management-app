const express = require("express");
const router = require("../server/routes/routes");
const {PORT} = require("./config/index");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const main = require("./db/connection");

main();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log("Server is running ");
});