const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

function getProductsCollection() {
    return admin.firestore().collection('products');
}

exports.sendMessage = functions.firestore
    .document('products/{productId}')
    .onCreate(event => {
        const docId = event.params.productId;
        const name = event.data.data().name;

        const productRef = getProductsCollection().doc(docId);

        return productRef.update({ message : `Nice name:${name} - LoVe Cloud`});
    });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
