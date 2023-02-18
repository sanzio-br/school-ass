// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ1sSOsYplD6nCK6LzIkoGHsZkD1t2Grg",
  authDomain: "fir-node-server-8c59a.firebaseapp.com",
  projectId: "fir-node-server-8c59a",
  storageBucket: "fir-node-server-8c59a.appspot.com",
  messagingSenderId: "91815865159",
  appId: "1:91815865159:web:190b7a382dd6401ebd7a62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);