import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDrLgA19AOnxRPkSSQrjcocu4gIIWuc9s",
  authDomain: "lexy-app-ai.firebaseapp.com",
  projectId: "lexy-app-ai",
  storageBucket: "lexy-app-ai.appspot.com",
  messagingSenderId: "775780302804",
  appId: "1:775780302804:web:7eda75c42a63f608aaa041",
  measurementId: "G-RDZD77TW28"
};

export const app = initializeApp(firebaseConfig);