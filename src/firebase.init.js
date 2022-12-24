// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCOV5-px6kjmWUX9E8MFsNRYd_zQrMrs9Y",
  authDomain: "library-management-syste-a20ea.firebaseapp.com",
  projectId: "library-management-syste-a20ea",
  storageBucket: "library-management-syste-a20ea.appspot.com",
  messagingSenderId: "479513072976",
  appId: "1:479513072976:web:47a3e83f5811ed0f1d0855",
  measurementId: "G-YJ6YGPQ3TW"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;