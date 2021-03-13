import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDo1-hUW8DcIDOO-C_8HbfqAX-w0gka_1M",
    authDomain: "linkedin-clonez.firebaseapp.com",
    projectId: "linkedin-clonez",
    storageBucket: "linkedin-clonez.appspot.com",
    messagingSenderId: "1068565949354",
    appId: "1:1068565949354:web:072143f1a05bcb864c99d3"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export { db, auth };
