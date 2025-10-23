// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY4MAI7OOu4SAp2qxLV3Va-mVtdhVMpxc",
  authDomain: "assingment-project-daf33.firebaseapp.com",
  projectId: "assingment-project-daf33",
  storageBucket: "assingment-project-daf33.firebasestorage.app",
  messagingSenderId: "251406878087",
  appId: "1:251406878087:web:481ae8fc4aae9921bc7f22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
