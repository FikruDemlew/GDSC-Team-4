// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOdzTTVgSmXqqHkgJog9rGt9Dx-xpQlGs",
  authDomain: "auth-development-7a7f7.firebaseapp.com",
  projectId: "auth-development-7a7f7",
  storageBucket: "auth-development-7a7f7.appspot.com",
  messagingSenderId: "577509244501",
  appId: "1:577509244501:web:cecf779eba057efba5dedc",
  measurementId: "G-HDWL3ME1JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {app,auth,db};