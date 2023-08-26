// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCe3PV094-Qyp972MFiARTCQxSbLZ_gw1o",
    authDomain: "mentalhealth-52558.firebaseapp.com",
    projectId: "mentalhealth-52558",
    storageBucket: "mentalhealth-52558.appspot.com",
    messagingSenderId: "199609149416",
    appId: "1:199609149416:web:5dd447516532b7abdf265d",
    measurementId: "G-BY972TXWWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const auth = getAuth();

// Getting all the elements of html
var email = document.getElementById("email");
var password = document.getElementById("password");

window.login = function(e) {
    e.preventDefault();
    var obj = {
        email:email.value,
        password:password.value,
    };

    signInWithEmailAndPassword(auth,obj.email,obj.password)
     .then(function(success) {
        // alert("You have logged In Successfully")
        var xyz = (success.user.uid);
        localStorage.setItem("uid",xyz)
        console.log(xyz)
        window.location.replace('home.html')
     })
     .catch(function(err) {
        window.location.replace('signUp.html')
        alert("Login error ")
     })
     console.log(obj);
}