
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDYzCIqYP0YySZHZYaC-5GVdYgXEkxftHk",
  authDomain: "todo-app-38e20.firebaseapp.com",
  projectId: "todo-app-38e20",
  storageBucket: "todo-app-38e20.appspot.com",
  messagingSenderId: "1065803744266",
  appId: "1:1065803744266:web:ae3a381735abbe4ce9cbf3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)