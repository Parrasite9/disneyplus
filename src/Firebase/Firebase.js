// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBRV3vnNlM2N_Xn97sZKqhGcSbmE7U1nio",
    authDomain: "disneyplusclone-23173.firebaseapp.com",
    projectId: "disneyplusclone-23173",
    storageBucket: "disneyplusclone-23173.appspot.com",
    messagingSenderId: "832597414677",
    appId: "1:832597414677:web:bc56028d41e4775c0ecf1c",
    measurementId: "G-49N5C5WENZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

//   THIS IS TO HELP ACCEPT PAYMENTS 
const db = firebaseApp.firestore()

// THIS IS TO HELP AUTHORIZE LOGIN 
const auth = firebase.auth()

// THIS ALLOWS GOOGLE LOGIN 
const provider = new firebase.auth.GoogleAuthProvider()

// THIS ALLOWS YOU TO STORE ALL THE IMAGES AND VIDEOS INSIDE OF FIREBASE 
const storage = firebase.storage()

export { db, auth, storage, provider }