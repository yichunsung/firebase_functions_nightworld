const functions = require("firebase-functions");
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');
const client = require('@sendgrid/mail');
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

client.setApiKey('YOUR_KEY');

exports.helloWorld = functions.https.onRequest(async(req, res) => {
  cors(req, res, async() => {
    functions.logger.log("log:", req.body);
    const newData = req.body;
    const result = await admin.firestore().collection('hello').add(newData);
    if (result) {
      const { email } = req.body;
      const msg = {
        to: email, // Change to your recipient
        from: {
          email: 'notice@elk-tree.studio',
          name: 'Elk Tree Studio Notification'
        },  // Change to your verified sender
        subject: '驗證你的信箱',
        // text: 'and easy to do anywhere, even with Node.js',
        html: `
          <div style="width: 400px; height: 300px; background-color: lightblue; color: #333;">
            <h1>Weclome ${ email }</h1>
            <p>
              開始這趟旅程，驗證你的信箱
            <p>
            <button>點我驗證</button>
          </div>
        `,
      };

      client
        .send(msg)
        .then((response) => {
          console.log(response[0].statusCode)
          console.log(response[0].headers)
          res.send({
            status: 200,
            msssage: 'successful',
            data: response
          });
        })
        .catch((error) => {
          console.error(error)
          res.status(400).json({
            status: 200,
            msssage: 'successful',
            data: error
          });
        });
    }
  });
});
