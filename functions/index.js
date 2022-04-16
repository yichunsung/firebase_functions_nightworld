const functions = require("firebase-functions");
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');
const haha = require('./haha');
admin.initializeApp();

exports.haha = haha.haha;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.helloWorld = functions.https.onRequest(async(req, res) => {
  cors(req, res, async() => {
    functions.logger.log("log:", req.body);
    const newData = req.body;
    const result = await admin.firestore().collection('hello').add(newData);
    res.send({
      id: 1,
      message: 'Hello World',
      data: result
    });
  });
});
