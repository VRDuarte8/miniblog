import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {/*<firebaseconfig>*/};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db };
