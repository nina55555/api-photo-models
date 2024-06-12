import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJPL7VbD-Pustcuw-Y1oYqhTu0mFXoRrw",
  authDomain: "api-photo-models-73a3f.firebaseapp.com",
  projectId: "api-photo-models-73a3f",
  storageBucket: "api-photo-models-73a3f.appspot.com",
  messagingSenderId: "252907247001",
  appId: "1:252907247001:web:49b3f8cddb82f627852f08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

