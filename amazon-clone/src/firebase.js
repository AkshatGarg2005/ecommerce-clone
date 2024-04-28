// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4RG9uonx-9FFG-e3KIupwbu3-MVlMSDA",
  authDomain: "clone-28dc3.firebaseapp.com",
  projectId: "clone-28dc3",
  storageBucket: "clone-28dc3.appspot.com",
  messagingSenderId: "910134691651",
  appId: "1:910134691651:web:226d4da885807f0d1691f6",
  measurementId: "G-MQKGFRWJTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);