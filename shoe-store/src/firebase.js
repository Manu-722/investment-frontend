// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFoje66tcTegGK1z41paScqhYaizRTbwI",
  authDomain: "electrocity-1a568.firebaseapp.com",
  projectId: "electrocity-1a568",
  storageBucket: "electrocity-1a568.firebasestorage.app",
  messagingSenderId: "622076114797",
  appId: "1:622076114797:web:b787a0f63cf4fb3d5d4c64",
  measurementId: "G-64LLNW37JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase Auth instance
export const auth = getAuth(app);

export default app;