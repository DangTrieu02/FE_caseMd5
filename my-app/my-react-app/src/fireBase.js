import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAueY3Ewt3Yc1fpBc_izBOMxRWpccIwwE4",
    authDomain: "data-1c8d1.firebaseapp.com",
    projectId: "data-1c8d1",
    storageBucket: "data-1c8d1.appspot.com",
    messagingSenderId: "581507518451",
    appId: "1:581507518451:web:e43801914119457a320c86",
    measurementId: "G-KLXXHYXSKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);