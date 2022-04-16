const functions = require("firebase-functions");
const cors = require('cors')({origin: true});

exports.haha = functions.https.onRequest(async(req, res) => {
  cors(req, res, async() => {
    functions.logger.log("log:", req.query);
    res.send({
      message: 'haha',
      data: req.query.name
    });
  });
});
