import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*
process.env.REACT_APP_FIREBASE_API_KEY
process.env.REACT_APP_FIREBASE_AUTHDOMAIN
process.env.REACT_APP_FIREBASE_PROYECTID
process.env.REACT_APP_FIREBASE_STORAGEBUCKET
process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID
process.env.REACT_APP_FIREBASE_APPID
process.env.REACT_APP_FIREBASE_MEASUREMENTID
*/
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROYECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestoreDB=getFirestore(app);
