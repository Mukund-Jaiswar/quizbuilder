import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const Provider = new GoogleAuthProvider();
