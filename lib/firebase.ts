import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAid6YpP77lGDTGae-5SxEyGTmhjEtdbl8",
    authDomain: "my-migraine-app.firebaseapp.com",
    projectId: "my-migraine-app",
    storageBucket: "my-migraine-app.firebasestorage.app",
    messagingSenderId: "790278008144",
    appId: "1:790278008144:web:61a7b6ffdce6141b2d1055",
    measurementId: "G-Y3NGRV1EXS"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };