const ObjectId = require('mongoose').Types.ObjectId;
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken')
const firebase = require('firebase');

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyAl7QX7lNzYN-1bxdpNjeVtc4QQHRL5RCw",
    authDomain: "gift-project-170015.firebaseapp.com",
    databaseURL: "https://gift-project-170015.firebaseio.com",
    projectId: "gift-project-170015",
    storageBucket: "gift-project-170015.appspot.com",
    messagingSenderId: "629357400059"
  };
  firebase.initializeApp(config);

//get a refrense for Authentication
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/userinfo.profile');


require('dotenv');

let controllers = {}

controllers.signIn = (req,res,next)=>{
  console.log(provider);
  firebase.auth().getRedirectResult().then(function(result) {
      console.log(result)
    // This gives you a Google Access Token. You can use it to access the Google API.
    // The signed-in user info.
    res.send({
      token: result.credential.accessToken,
      user: result.user
    })
}).catch(function(error) {
  console.log(error)
  // Handle Errors here.
  // The email of the user's account used.
  // The firebase.auth.AuthCredential type that was used.
  res.send({
    errorCode: error.code,
    errorMessage: error.message,
    email: error.email,
    credential: error.credential
  })
});
}

module.exports = controllers