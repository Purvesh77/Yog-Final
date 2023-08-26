// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getDatabase, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
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

const db = getDatabase();
//   const analytics = getAnalytics(app);
const auth = getAuth();

// Getting all the elements of html
var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");

// making a function for storing user data
function InsertData() {
    set(ref(db, "Users/" + name.value), {
        name: name.value,
        email: email.value,
        password: password.value,
    })
    .then(() => {
        console.log("Data saved successfully");
    })
    .catch((error) => {
        console.log("data save error" + error);
    });
}

// function for creating a user on Firebase authentication and storing user data in Firebase Realtime Database
window.signUp = function(e) {
    e.preventDefault();
    var obj = {
        name:name.value,
        email:email.value,
        password:password.value,
    }
    createUserWithEmailAndPassword(auth,obj.email,obj.password)
     .then(function(success) {
        InsertData();
        alert("You have Signed Up Successfully")
        window.location.replace('signIn.html')
     })
     .catch(function(err) {
        alert("error" + err)
     })
     console.log(obj)
};

document.getElementById('SignUpForm').addEventListener('submit', InsertData);
