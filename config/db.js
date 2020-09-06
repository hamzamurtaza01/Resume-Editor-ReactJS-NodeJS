// const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get('mongoURI');

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
// require("firebase/auth");
// require("firebase/firestore");

const connectDB = async () => {
  try {
    // TODO: Replace the following with your app's Firebase project configuration
    var firebaseConfig = {
      apiKey: "AIzaSyD7VZk_iu3ZFwabD2BWz06WKZhz9n-8diI",
      authDomain: "hamza-murtaza-resume.firebaseapp.com",
      databaseURL: "https://hamza-murtaza-resume.firebaseio.com",
      projectId: "hamza-murtaza-resume",
      storageBucket: "hamza-murtaza-resume.appspot.com",
      messagingSenderId: "494950080994",
      appId: "1:494950080994:web:53dced3ab3718c39f399bb"
    };

    // Initialize Firebase
    await firebase.initializeApp(firebaseConfig);

    console.log('Firebase Database Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
