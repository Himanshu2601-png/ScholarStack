import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRYKl-eFzharc_ooM58Jkfe7fuLPv4DWs",
  authDomain: "scholarstack-856b4.firebaseapp.com",
  projectId: "scholarstack-856b4",
  storageBucket: "scholarstack-856b4.firebasestorage.app",
  messagingSenderId: "35137339817",
  appId: "1:35137339817:web:390b0c9d9fab2fb29e84b8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
