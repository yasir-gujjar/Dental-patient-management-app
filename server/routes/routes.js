const express = require("express");
const Controller = require("../controller/Controller");
const Smscontroller = require("../controller/Smscontroller");
const router = express.Router();

// signup eoute
router.post("/users", Controller.Userdata);

// login route
router.post("/login", Controller.Userlogin);
// 
// prescribe medicine
router.post("/prescribe", Controller.Write);
// list of bills
router.get("/record", Controller.Record);
// search

// router.post("/search", Postcontroller.Search);

//sendqueries  (patient detail submission)
router.post("/sendqueries", Controller.Sendqueries);

// patientqueries
router.get("/patientqueries", Controller.Patientqueries);

// opt sms endpoint
router.post("/sendsms", Smscontroller.Otp);


module.exports = router;