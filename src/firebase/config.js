import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAx3i9WVyuR3KWCaDmuuFu2H-cXaBWnWBg",
  authDomain: "savannah-portfolio.firebaseapp.com",
  projectId: "savannah-portfolio",
  storageBucket: "savannah-portfolio.appspot.com",
  messagingSenderId: "832926031760",
  appId: "1:832926031760:web:ceb03b653d42fdfd811d15"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore()

export {app, auth, db}