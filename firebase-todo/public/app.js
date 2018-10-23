
console.log(`Loading app.js`);

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      const user = result.user;
      console.dir(user);
      document.writeln(`Hello ${user.displayName}`);
    }).catch((error) => {
        console.error(error);
    });
}
function getFirestoreDB() {
    const app = firebase.app();
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);
    return firestore;
}
function getStorageRef() {
    return firebase.storage().ref();        
}
function getPostsCollection() {
    return getFirestoreDB().collection('posts');
}
function getProductsCollection() {
    return getFirestoreDB().collection('products');
}