import { initializeApp } from "firebase/app";

const firestoreConfig = {
  apiKey: "AIzaSyCS_B4tau6V_bxz5KCnZ_zCeAIkvjLHzsg",
  authDomain: "skinaesth-6649a.firebaseapp.com",
  projectId: "skinaesth-6649a",
  storageBucket: "skinaesth-6649a.appspot.com",
  messagingSenderId: "305586601788",
  appId: "1:305586601788:web:c6cec3266f30b2537be839"
};

const firestore = initializeApp(firestoreConfig);

export default firestore;