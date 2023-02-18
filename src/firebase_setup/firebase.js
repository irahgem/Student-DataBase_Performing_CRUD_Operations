import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCANLG5ytdmsq9fs_I2hc44mWrB6-WNbMk",
  authDomain: "vocal-booth-322506.firebaseapp.com",
  projectId: "vocal-booth-322506",
  storageBucket: "vocal-booth-322506.appspot.com",
  messagingSenderId: "920157060011",
  appId: "1:920157060011:web:e0d574325656a84566f0ee",
  measurementId: "G-EF9HCD34Z0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;