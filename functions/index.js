const functions = require("firebase-functions");
const admin = require('firebase-admin');
const fetch = require('node-fetch');
const https = require('https')
var paystack = require("paystack-api")("sk_test_1fbf46ff165d68ab2c5a7ac01f12109fb4073d00");
const sdk = require('api')('@qoreid/v1.0#79ra32ll9x7kn58');
var serviceAccount = require("./permissions.json");
const bcrypt = require('bcrypt');
var crypto = require('crypto');
const express = require('express');
var _ = require('lodash');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const app = express();
const db = admin.firestore();
const saltRounds = 10;
const cors = require('cors');
app.use(cors({ origin: true }))
const helper = new paystack.FeeHelper();
const events = paystack.Events;
var secret = "sk_test_1fbf46ff165d68ab2c5a7ac01f12109fb4073d00";





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



function access(req, res) {

    (async () => {
        try {



            const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(req.body)).digest('hex');
            if (hash == req.headers['x-paystack-signature']) {
                // Retrieve the request's body
                const event = req.body;
                if (event.event == 'charge.success') {


                    const receiverWallet = db.collection('wallet').doc(event.data.metadata.user_id);

                    let receiverWalletInfo2 = await receiverWallet.get()

                    let receiverWalletInfo = receiverWalletInfo2.data()

                    const creditamount = event.data.metadata.creditAmount * 100
                    const receiveramount = receiverWalletInfo.personalBalance * 100;

                    await receiverWallet.update({
                        personalBalance: (receiveramount + creditamount) / 100
                    });

                    await db.collection('transactions').add({
                        createdAt: new Date().toLocaleDateString(),
                        amount: event.data.metadata.creditAmount,
                        transactionStatus: "Success",
                        senderId: "",
                        receiverId: event.data.metadata.user_id,
                        sendername: "",
                        users: [
                            "",
                            event.data.metadata.user_id
                        ],
                        transactionType: "CR"
                    });

                }

            }
            return res.sendStatus(200)

        } catch (error) {
            console.log(error)
            return res.send(error)
        }
    })();

}




app.post('/api/fundAccount', access)


// app.post('/api/getFee', (req, res) => {

//     const payData = JSON.parse(req.body);


//     (async () => {
//         try {

//             const newFees = helper.addFeesTo(payData.topUpAmount)
//             return res.status(200).send({
//                 "successful": true,
//                 newFees: newFees
//             })
//         } catch (error) {
//             console.log(error)
//             return res.send(error)
//         }
//     })();

// })



app.post('/api/getFeeApp', (req, res) => {

    const payData = req.body;


    (async () => {
        try {

            const newFees = helper.addFeesTo(payData.topUpAmount)
            return res.status(200).send({
                "successful": true,
                newFees: newFees
            })
        } catch (error) {
            console.log(error)
            return res.send(error)
        }
    })();

})

app.post('/api/getAccountName', (req, res) => {



    (async () => {
        try {
            paystack.verification.resolveAccount({
                account_number: req.body.accountNumber,
                bank_code: req.body.bankCode,
            })
                .then(function (body) {
                    return res.status(200).send(body)
                }).catch(error => console.log(error));


        } catch (error) {
            console.log(error)
            return res.send(error)
        }
    })();

})



app.get('/api/getBanks', (req, res) => {



    (async () => {
        try {
            paystack.misc.list_banks()
                .then(function (body) {
                    return res.status(200).send(body)
                }).catch(error => console.log(error));


        } catch (error) {
            console.log(error)
            return res.send(error)
        }
    })();

})







app.post('/api/withdraw', (req, res) => {


    (async () => {
        try {

            const senderWallet = db.collection('wallet').doc(req.body.senderId);
            const security = db.collection('security').doc(req.body.senderId);
            const senderInfo = db.collection('users').doc(req.body.senderId);

            let senderWalletInfo2 = await senderWallet.get()
            let hashPin2 = await security.get()
            let sender = await senderInfo.get();
            let senderWalletInfo = senderWalletInfo2.data()
            let hashPinData = hashPin2.data()
            let senderInfoData = sender.data()
            var transactionamount = req.body.amount * 100
            var senderamount = senderWalletInfo.personalBalance * 100;
            var hashPin = hashPinData.pin
            var senderDataName = _.toUpper(senderInfoData.firstName) + " " + _.toUpper(senderInfoData.lastName)
            var senderNameArray = _.words(senderDataName)




            bcrypt.compare(req.body.pin, hashPin).then(async function (result) {
                if (result) {

                    paystack.verification.resolveAccount({
                        account_number: req.body.accountNumber,
                        bank_code: req.body.bankCode,
                    })
                        .then(async function (body) {
                            if (body.status == true) {
                                var senderBankNameArray = _.words(body.data.account_name)
                                const difference = _.difference(senderNameArray, senderBankNameArray);

                                if (difference.length === 0) {

                                    if (senderamount > transactionamount) {
                                        await senderWallet.update({
                                            personalBalance: (senderamount - transactionamount) / 100
                                        });

                                        await db.collection('transactions').add({
                                            createdAt: new Date().toLocaleDateString(),
                                            amount: req.body.amount,
                                            transactionStatus: "Success",
                                            senderId: req.body.senderId,
                                            senderName: senderDataName,
                                            receiverBank: req.body.bank,
                                            receiverBankCode: req.body.bankCode,
                                            receiverAccountNumber: req.body.accountNumber,
                                            receiverAccountName: req.body.accountName,
                                            verifiedAccountName: body.data.account_name,
                                            users: [
                                                "",
                                                req.body.senderId
                                            ],
                                            transactionType: "DB"
                                        });

                                        await db.collection('payout').add({
                                            createdAt: new Date().toLocaleDateString(),
                                            amount: req.body.amount,
                                            senderId: req.body.senderId,
                                            senderName: senderDataName,
                                            receiverBank: req.body.bank,
                                            receiverBankCode: req.body.bankCode,
                                            receiverAccountNumber: req.body.accountNumber,
                                            receiverAccountName: req.body.accountName,
                                            verifiedAccountName: body.data.account_name,
                                            users: [
                                                "",
                                                req.body.senderId
                                            ],
                                            transactionType: "Payout",
                                            status: "pending"
                                        });

                                        return res.status(200).send({
                                            'status': true,
                                            'messege': "transaction sucessful"
                                        });

                                    } else {
                                        return res.status(404).send({
                                            'status': false,
                                            'messege': "Insuficient funds"
                                        });
                                    }

                                } else {

                                    return res.status(404).send({
                                        'status': false,
                                        'messege': "inconsistent account name"
                                    });
                                    // name not the same with bank name

                                }


                            } else {
                                return res.status(404).send({
                                    'status': false,
                                    'messege': "Unverified account name"
                                });
                                //account name could not be verified

                            }


                        }).catch(error => console.log(error));



                } else {
                    return res.status(404).send({
                        'status': false,
                        'messege': "incorrect pin"
                    });
                }
            });
        } catch (error) {
            console.log(error)
            return res.send(error)
        }
    })();

})







// app.post('/api/fundAccount', (req, res) => {

//     const refData = JSON.parse(req.body);

//     (async () => {
//         try {
//             const options = {
//                 hostname: 'api.paystack.co',
//                 port: 443,
//                 path: `/transaction/verify/:${refData.reference}`,
//                 method: 'GET',
//                 headers: {
//                     Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
//                 }
//             }

//             https.request(options, res => {
//                 let data = ''

//                 res.on('data', (chunk) => {
//                     data += chunk
//                 });

//                 res.on('end', () => {
//                     console.log(JSON.parse(data))
//                     return res.send(data)
//                 })
//             }).on('error', error => {
//                 console.error(error)
//             })

//         } catch (error) {
//             console.log(error)
//             return res.send(error)
//         }
//     })();

// })

// app.post('/api/wallet/add', (req, res) => {

//     (async () => {

//         try {
//             const senderWallet = db.collection('wallet').doc(req.body.senderId);
//             const receiverWallet = db.collection('wallet').doc(req.body.receiverId);
//             const security = db.collection('security').doc(req.body.senderId);


//             let senderWalletInfo2 = await senderWallet.get()
//             let receiverWalletInfo2 = await receiverWallet.get()
//             let hashPin2 = await security.get()

//             let senderWalletInfo = senderWalletInfo2.data()
//             let receiverWalletInfo = receiverWalletInfo2.data()
//             let hashPinData = hashPin2.data()

//             var receiveramount = receiverWalletInfo.personalBalance;
//             var senderamount = senderWalletInfo.personalBalance;
//             var hashPin = hashPinData.pin


//             bcrypt.compare(req.body.pin, hashPin).then(async function (result) {
//                 if (result) {
//                     if (senderamount > req.body.amount) {
//                         await senderWallet.update({
//                             personalBalance: senderamount - req.body.amount
//                         });
//                         await receiverWallet.update({
//                             personalBalance: receiveramount + req.body.amount
//                         });
//                         return res.status(200).send({
//                             'status': true,
//                             'messege': "transaction sucessful"
//                         });

//                     } else {
//                         return res.status(404).send({
//                             'status': false,
//                             'messege': "Insuficient funds"
//                         });
//                     }
//                 } else {
//                     return res.status(404).send({
//                         'status': false,
//                         'messege': "incorrect pin"
//                     });
//                 }
//             });

//         } catch (error) {
//             return res.status(404).send({
//                 'status': false,
//                 'messege': "something went wrong"
//             });
//         }
//     })();

// })


app.post('/api/wallet/add', (req, res) => {

    (async () => {

        try {
            const senderWallet = db.collection('wallet').doc(req.body.senderId);
            const senderInfo = db.collection('users').doc(req.body.senderId);
            const receiverWallet = db.collection('wallet').doc(req.body.receiverId);
            const security = db.collection('security').doc(req.body.senderId);


            let senderWalletInfo2 = await senderWallet.get()
            let receiverWalletInfo2 = await receiverWallet.get()
            let hashPin2 = await security.get()
            let sender = await senderInfo.get();

            let senderWalletInfo = senderWalletInfo2.data()
            let receiverWalletInfo = receiverWalletInfo2.data()
            let senderInfoData = sender.data()
            let hashPinData = hashPin2.data()
            var transactionamount = req.body.amount * 100
            var receiveramount = receiverWalletInfo.personalBalance * 100;
            var senderamount = senderWalletInfo.personalBalance * 100;
            var hashPin = hashPinData.pin


            bcrypt.compare(req.body.pin, hashPin).then(async function (result) {
                if (result) {
                    if (senderamount > transactionamount) {
                        await senderWallet.update({
                            personalBalance: (senderamount - transactionamount) / 100
                        });
                        await receiverWallet.update({
                            personalBalance: (receiveramount + transactionamount) / 100
                        });
                        await db.collection('transactions').add({
                            createdAt: new Date().toLocaleDateString(),
                            amount: req.body.amount.toString(),
                            transactionStatus: "Success",
                            senderId: req.body.senderId,
                            receiverId: req.body.receiverId,
                            sendername: senderInfoData.firstName + " " + senderInfoData.lastName,
                            users: [
                                req.body.senderId,
                                req.body.receiverId
                            ],
                            transactionType: "TR"
                        });
                        return res.status(200).send({
                            'status': true,
                            'messege': "transaction sucessful"
                        });

                    } else {
                        return res.status(404).send({
                            'status': false,
                            'messege': "Insuficient funds"
                        });
                    }
                } else {
                    return res.status(404).send({
                        'status': false,
                        'messege': "incorrect pin"
                    });
                }
            });

        } catch (error) {
            return res.status(404).send({
                'status': false,
                'messege': "something went wrong"
            });
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