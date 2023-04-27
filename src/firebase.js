import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBNWMS7wQYk5_Zu10ZYNfFhQCRf475VH-A",
  authDomain: "bytheminute-19445.firebaseapp.com",
  databaseURL: "https://bytheminute-19445-default-rtdb.firebaseio.com/",
  projectId: "bytheminute-19445",
  storageBucket: "bytheminute-19445.appspot.com",
  messagingSenderId: "273070933851",
  appId: "1:273070933851:web:a5ef7fdb89fc253661bc7e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
