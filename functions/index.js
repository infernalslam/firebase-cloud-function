var functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!')
})

exports.messageText = functions.https.onRequest((req, res) => {
  res.send({ action: 'read data query text', value: req.query.text })
})
