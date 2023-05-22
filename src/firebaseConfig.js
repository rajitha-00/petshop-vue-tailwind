import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBkOXe7VZGwQ3iuZygkrbWXZleBqq4fRsE",
  authDomain: "jackpetsupply.firebaseapp.com",
  projectId: "jackpetsupply",
  storageBucket: "jackpetsupply.appspot.com",
  messagingSenderId: "136323625667",
  appId: "1:136323625667:web:20e150b901cdbe3327a876",
  measurementId: "G-8ECPHXRY51"
};

const app = initializeApp(firebaseConfig);
export default app;
