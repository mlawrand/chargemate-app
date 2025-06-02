 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBjckg84N9j1tBxMcGIiJmc6W_VCB_du40",
    authDomain: "chargemate-9ea2a.firebaseapp.com",
    projectId: "chargemate-9ea2a",
    storageBucket: "chargemate-9ea2a.firebasestorage.app",
    messagingSenderId: "1009871739694",
    appId: "1:1009871739694:web:5015cd3c291d7c596678bf",
    measurementId: "G-V29G4GSC3P"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);