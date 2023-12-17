const Bills = require("../db/model/Bill");
const User = require("../db/model/User");
const Query = require("../db/model/Query");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const {SECRET_KEY} = require("../config/index");
const Controller = {


    // signup endpoit
    async Userdata(req, res) {
        try {
            let {email, password} = req.body;

            // const salt = await bcrypt.genSalt(Number((process.env.SALT)));

            const hashedpassword = await bcrypt.hash(req.body.password, 10);

            let user = new User({
                email,
                password: hashedpassword
            });

            const alreadytakenemail = await User.findOne({email});

            if (alreadytakenemail) {

                return res.status(409).send("email is already taken");
            }

            await user.save();
            res.status(201).send("you are successfully loginned");

        } catch (error) {
            res.status(500).send("Signup failed with errors");
        }

    },
    // login endpoit
    async Userlogin(req, res) {
        let success = false;


        try {
            const user = await User.findOne({
                email: req.body.email
            });


            if (!user) {
                return res.status(404).send({message: "User Not found."});
            }

            const passwordIsValid = await bcrypt.compare(
                req.body.password,
                user.password
            );


            if (!passwordIsValid) {
                return res.status(401).send({
                    message: "Invalid Password!",
                });
            }

            const token = jwt.sign({id: user.email},
                SECRET_KEY,
                {
                    algorithm: 'HS256',
                    allowInsecureKeySizes: true,
                    expiresIn: 86400, // 24 hours
                });


            // req.session.token = token;
            success = true;
            return res.status(200).json({success, token});

        } catch (error) {

            return res.status(500).send({message: error.message});
        }


    },
    // lmedicine prescription endpoint  endpoit
    async Write(req, res) {
        try {
            let {pname, pno, disease, sufferperiod, treatment, bill, address, localdate} = req.body;

            let savebill = new Bills({pname, pno, disease, sufferperiod, treatment, bill, address, localdate});


            const data = await savebill.save();
            res.status(201).send("bill added successfully");

        } catch (error) {
            res.send("error while saving bill").status(400);
        }

    },
    async Patientqueries(req, res) {

        try {
            const querydata = await Query.find({}).sort({name: 1});

            res.status(200).send(querydata);

        } catch (error) {
            res.status(400).send("sorry your request failed try again");
        }
    },
    // bills page endpoint


    async Record(req, res) {

        try {
            // const query = req.body.word;
            let volume = await Bills.find({}).sort().sort({localdate: 1});

            res.status(200).json(volume);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    // patients health report endpoint
    async Sendqueries(req, res) {
        try {
            let {name, pno, gender, disease, address, sufferperiod, date, note} = req.body;

            let query = new Query({
                name, pno, gender, disease, address, sufferperiod, date, note

            });
            const doc = await query.save();
            res.send(doc).status(201);



        } catch (error) {

            res.send(error);
        }
    }
};

module.exports = Controller;
