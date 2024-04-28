import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, useAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDAw9mXB2ASOx6vS3PEqBX4qgGS5X022eE",
  authDomain: "africtv-research.firebaseapp.com",
  projectId: "africtv-research",
  storageBucket: "africtv-research.appspot.com",
  messagingSenderId: "781004465892",
  appId: "1:781004465892:web:f56c5ab47bec9ae306eef1",
  measurementId: "G-4ZNN6SX1C3"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export { provider };

export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);
