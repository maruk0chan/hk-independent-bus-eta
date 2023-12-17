import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3tRMySFFnT7BEcOAU9jENuiiWl6pMjhY",
  authDomain: "hk-independant-bus-eta.firebaseapp.com",
  projectId: "hk-independant-bus-eta",
  storageBucket: "hk-independant-bus-eta.appspot.com",
  messagingSenderId: "853512114246",
  appId: "1:853512114246:web:c259276d4494f27ae47a47",
  measurementId: "G-4XHYDGJKP3",
};

// Initialize Firebase
export function initializeFirebase() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return { app, analytics };
}
