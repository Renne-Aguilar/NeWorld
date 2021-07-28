import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCA8c0Ot3kmiwFJptDzUBz-I8Rex8Yv3as",
    authDomain: "neworldx.firebaseapp.com",
    projectId: "neworldx",
    storageBucket: "neworldx.appspot.com",
    messagingSenderId: "434454152346",
    appId: "1:434454152346:web:f79786891abe7428d70b23",
    measurementId: "G-6MB4RL6P7B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 
  
  export { db, storage, auth, provider };