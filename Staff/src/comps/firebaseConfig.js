import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyC1uPGFcegMj3RUtQxb_Qm96L4ThBa_5a4",
  authDomain: "staffdata-14452.firebaseapp.com",
  projectId: "staffdata-14452",
  storageBucket: "staffdata-14452.appspot.com",
  messagingSenderId: "777729472827",
  appId: "1:777729472827:web:9449629f313011ed3a1f1e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()


export {db,auth,provider};