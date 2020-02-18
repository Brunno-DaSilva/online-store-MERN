import firebase from "firebase"; 
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyARUwcw7ICMzzGtLe1W9XgIjj_q7m2WvUc",
    authDomain: "react-login-form-2db9a.firebaseapp.com",
    databaseURL: "https://react-login-form-2db9a.firebaseio.com",
    projectId: "react-login-form-2db9a",
    storageBucket: "react-login-form-2db9a.appspot.com",
    messagingSenderId: "1074936303210",
    appId: "1:1074936303210:web:59884aa4cdc11dd230c413",
    measurementId: "G-V9SV4HXTYS"
  };
  
  const fire =  firebase.initializeApp(firebaseConfig); 

  export default fire; 
