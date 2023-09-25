// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore" ;
import { getStorage } from "@firebase/storage" ;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Uk3oXI1k5rLvUo-3dcdXsk-3OeICgWk",
  authDomain: "harnais-ludmilla.firebaseapp.com",
  projectId: "harnais-ludmilla",
  storageBucket: "harnais-ludmilla.appspot.com",
  messagingSenderId: "1006849369541",
  appId: "1:1006849369541:web:e1a4aa8a990e9c7bd8d7ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize DB FireStore Database
export const dbFirestore = getFirestore(app) ;

//init storage
export const storage = getStorage(app) ;


export default app;
