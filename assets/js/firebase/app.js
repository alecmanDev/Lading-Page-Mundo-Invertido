// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOCGksHnkVRJQZpG_v4LM2wCC0cuwvAHg",
  authDomain: "projeto-test-alec.firebaseapp.com",
  projectId: "projeto-test-alec",
  storageBucket: "projeto-test-alec.appspot.com",
  messagingSenderId: "623848230898",
  appId: "1:623848230898:web:1b271e0d7e10961651656b",
  measurementId: "G-XB0YY9WK19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;