import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAQ_FhJC4m_ufnRbCcyNeyshN4DvoqyMis",
    authDomain: "booksanta-9de9e.firebaseapp.com",
    projectId: "booksanta-9de9e",
    storageBucket: "booksanta-9de9e.appspot.com",
    messagingSenderId: "738317017272",
    appId: "1:738317017272:web:a6b9bc12b52110c7f1544d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
