import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3zaP2G83GITyOCpmN_lzAjfI9QSLNhXk",
  authDomain: "random-test-4041a.firebaseapp.com",
  projectId: "random-test-4041a",
  storageBucket: "random-test-4041a.appspot.com",
  messagingSenderId: "97729673470",
  appId: "1:97729673470:web:bf78a822a2a55f46b1cdaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const Provider = new GoogleAuthProvider();