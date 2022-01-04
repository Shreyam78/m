const firebaseConfig = {
    apiKey: "AIzaSyCYYLBX-cemsO8PTCOpsGHUR9al0w60fI0",
    authDomain: "kwitter-ffb41.firebaseapp.com",
    databaseURL: "https://kwitter-ffb41-default-rtdb.firebaseio.com",
    projectId: "kwitter-ffb41",
    storageBucket: "kwitter-ffb41.appspot.com",
    messagingSenderId: "797474293258",
    appId: "1:797474293258:web:6c75ce2e2ab55ef4d081f3",
    measurementId: "G-J4M2QYQRFB"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function user() {
 use_n = document.getElementById("40$").value;
 firebase.database().ref("/").child(use_n).update({
     purpose:"adding user"
 });
}