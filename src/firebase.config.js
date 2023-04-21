// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth }from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU0ydXV6E_gXyVLmrMnMD7wzwXfeEowXw",
  authDomain: "saeedmart-34082.firebaseapp.com",
  projectId: "saeedmart-34082",
  storageBucket: "saeedmart-34082.appspot.com",
  messagingSenderId: "648973393959",
  appId: "1:648973393959:web:ef2e6a5f5711205b802e02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app