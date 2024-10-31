import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIQrCvNyh_2G_V1u5k5V1R5bed20JRnjs",
  authDomain: "miniblog-46b46.firebaseapp.com",
  projectId: "miniblog-46b46",
  storageBucket: "miniblog-46b46.appspot.com",
  messagingSenderId: "1051633911531",
  appId: "1:1051633911531:web:8856e4e6f38771d5c760ae"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db };