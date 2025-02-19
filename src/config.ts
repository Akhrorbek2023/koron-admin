
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDs8Dd_yoqrolfoCt-iVGTm8qwbTtRyi1E",
  authDomain: "koron-90a29.firebaseapp.com",
  projectId: "koron-90a29",
  storageBucket: "koron-90a29.appspot.com",
  messagingSenderId: "403162223379",
  appId: "1:403162223379:web:a156bb8e8391846ede80e6",
  measurementId: "G-BW5Z2T6DZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app);


export {db, storage, collection, addDoc}
