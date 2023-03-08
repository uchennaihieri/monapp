const functions = require("firebase-functions");
const admin = require('firebase-admin');
const fetch = require('node-fetch');
var serviceAccount = require("./permissions.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const express = require('express');
const app = express();
const db = admin.firestore();

const cors = require('cors');

app.use(cors({ origin: true }))




app.get('/api/user/:id', (req, res) => {

    (async () => {
        try {
            const document = db.collection('users').doc(req.params.id);
            let user = await document.get()
            let response = user.data();
            console.log(response)
            return res.status(200).send(response);

        } catch (error) {
            console.log(error)
            return res.status(500).send(error)
        }
    })();

})




app.post('/api/verifyBvn', (req, res) => {

    (async () => {
        try {
            const phoneNumber = `234${req.body.phoneNumber.substring(1)}`

            fetch("https://api.ng.termii.com/api/sms/otp/send", {


                method: "POST",

                body: JSON.stringify({
                    "api_key": process.env.TERMI_API_KEY,
                    "message_type": "NUMERIC",
                    "to": phoneNumber,
                    "from": "Creatorh",
                    "channel": "generic",
                    "pin_attempts": 10,
                    "pin_time_to_live": 5,
                    "pin_length": 6,
                    "pin_placeholder": "< 1234 >",
                    "message_text": "Your Monapp verification pin is < 1234 >. Please note that this pin will expire in 5 minutes",
                    "pin_type": "NUMERIC"
                }),

                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return response.json();
            })

                .then(function (data) {
                    return res.send(data);
                })
                .catch(function (error) {
                    console.log(error);
                })

        } catch (error) {
            console.log(error)
            return res.send(error)
        }
    })();

})



app.post('/api/verifyOtp', (req, res) => {

    (async () => {
        try {

            const pinId = req.body.pinId
            const pin = req.body.pin

            fetch("https://api.ng.termii.com/api/sms/otp/verify", {


                method: "POST",

                body: JSON.stringify({
                    "api_key": process.env.TERMI_API_KEY,
                    "pin_id": pinId,
                    "pin": pin,
                }),

                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(function (response) {
                return response.json();
            })

                .then(function (data) {
                    return res.send(data);
                })
                .catch(function (error) {
                    console.log(error);
                })

        } catch (error) {
            console.log(error)
            return res.send(error)
        }
    })();

})





exports.app = functions.https.onRequest(app);