const functions = require("firebase-functions");
const admin = require('firebase-admin');
const fetch = require('node-fetch');
const sdk = require('api')('@qoreid/v1.0#79ra32ll9x7kn58');
var serviceAccount = require("./permissions.json"); const bcrypt = require('bcrypt');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const express = require('express');
const app = express();
const db = admin.firestore();
const saltRounds = 10;
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

            const termi = req.body;

            fetch("https://api.ng.termii.com/api/sms/otp/verify", {


                method: "POST",

                body: JSON.stringify({
                    "api_key": process.env.TERMI_API_KEY,
                    "pin_id": termi.pinId,
                    "pin": termi.pin,
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




app.post('/api/crypt', (req, res) => {

    const cryptData = JSON.parse(req.body);

    (async () => {
        try {
            bcrypt.hash(cryptData.pin, saltRounds, async function (err, hash) {
                if (err) {
                    return res.send(err)
                } else {

                    const document = db.collection('security').doc(cryptData.id);
                    await document.set({
                        pin: hash,
                        status: 'active'
                    }, { merge: true }).then(() => {
                        return res.status(200).send({
                            "successful": true
                        });
                    }).catch((error) => res.send({
                        "successful": false,
                        error: error
                    }))

                }
            });


        } catch (error) {
            console.log(error)
            return res.send(error)
        }
    })();

})


// app.post('/api/getBanks', (req, res) => {
//     (async () => {
//         try {
//             const options = {
//                 method: 'POST',
//                 headers: { accept: 'text/plain', 'content-type': 'application/json' },
//                 body: JSON.stringify({ clientId: process.env.QOREID_CLIENT, secret: process.env.QOREID_SECRET })
//             };

//             fetch('https://api.qoreid.com/token', options)
//                 .then(response => response.json())
//                 .then(response => {
//                     const options2 = {
//                         method: 'GET',
//                         headers: {
//                             accept: 'application/json',
//                             authorization: `Bearer ${response.accessToken}`
//                         }
//                     };

//                     fetch('https://api.qoreid.com/v1/banks/bvn-nuban', options2)
//                         .then(response => response.json())
//                         .then(response => {
//                             return res.send(response)
//                         })
//                         .catch(err => console.error(err));
//                 }
//                 )
//                 .catch(err => console.error(err));

//         } catch (error) {
//             console.log(error)
//             return res.send(error)
//         }
//     })();

// })


// app.post('/api/getBankData', (req, res) => {

//     const access = JSON.parse(req.body);

//     (async () => {
//         try {
//             const options = {
//                 method: 'POST',
//                 headers: { accept: 'text/plain', 'content-type': 'application/json' },
//                 body: JSON.stringify({ clientId: process.env.QOREID_CLIENT, secret: process.env.QOREID_SECRET })
//             };

//             fetch('https://api.qoreid.com/token', options)
//                 .then(response => response.json())
//                 .then(response => {


//                     fetch('https://api.qoreid.com/v1/ng/identities/bvn-nuban', {
//                         method: 'POST',
//                         headers: {
//                             accept: 'application/json',
//                             'content-type': 'application/json',
//                             authorization: `Bearer ${response.accessToken}`
//                         },
//                         body: JSON.stringify({
//                             firstname: `${access.firstname}`,
//                             lastname: `${access.lastname}`,
//                             accountNumber: `${access.accountNumber}`,
//                             bankCode: `${access.bankCode}`
//                         })
//                     })
//                         .then(response => response.json())
//                         .then(response => console.log(response)
//                         )
//                         .catch(err => console.error(err));
//                 }
//                 )
//                 .catch(err => console.error(err));

//         } catch (error) {
//             console.log(error)
//             return res.send(error)
//         }
//     })();

// })





exports.app = functions.https.onRequest(app);