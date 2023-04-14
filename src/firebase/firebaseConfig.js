import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOw0IoonrcKQOJPbkDVvheRrGVtPZCSNo",
  authDomain: "profile-6b545.firebaseapp.com",
  projectId: "profile-6b545",
  storageBucket: "profile-6b545.appspot.com",
  messagingSenderId: "827897638779",
  appId: "1:827897638779:web:ce57f870ddf1116ac557de",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const docs = collection(db, "projects");
