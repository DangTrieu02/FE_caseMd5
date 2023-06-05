import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBxCnrD85Plrn20_jAcc5EOwZ-gU5LYsTI",
    authDomain: "case-md5-1ba74.firebaseapp.com",
    projectId: "case-md5-1ba74",
    storageBucket: "case-md5-1ba74.appspot.com",
    messagingSenderId: "354292242155",
    appId: "1:354292242155:web:55b3d6a36ee4bb5f0c90ae",
    measurementId: "G-L2QSYB9590"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };