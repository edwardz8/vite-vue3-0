import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdmdKSG5k7FhtWnj3I65ARJ6ihTJ3BeuI",
    authDomain: "forum-4f89a.firebaseapp.com",
    projectId: "forum-4f89a",
    storageBucket: "forum-4f89a.appspot.com",
    messagingSenderId: "222493354944",
    appId: "1:222493354944:web:d9c3f9065453ec1be33625",
    measurementId: "G-LXMSGVP75K"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()
export default db