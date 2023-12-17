const {ACCOUNTSID, AUTHTOKEN} = require("../config/index");
const client = require('twilio')(ACCOUNTSID, AUTHTOKEN);
const Message = require("../db/model/Message");

const SmsController = {

    async Otp(req, res) {
        const twilioPhoneNumber = '+15738304064'; // Twilio phone number

        try {
            const {receiver, message} = req.body;
            const twilioMessage = await client.messages.create({
                from: twilioPhoneNumber,
                to: receiver,
                body: message
            });

            console.log('Message sent successfully. SID:', twilioMessage.sid);



            let msg = new Message({
                receiver,
                message
            });

            const doc = await msg.save();

            res.status(201).send("message sent successfully");

            console.log(doc);

        } catch (error) {
            res.status(400).send("message hasn't sent successfully");

            console.error('Error sending message:', error);
            res.status(500).json({success: false, message: 'Error sending message'});
        }
    }
};

module.exports = SmsController;
