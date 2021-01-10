import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDVbP7Jradp9G1y401IorCNzZ72KA-2-1Y",
    authDomain: "instagram-clone-40cad.firebaseapp.com",
    projectId: "instagram-clone-40cad",
    storageBucket: "instagram-clone-40cad.appspot.com",
    messagingSenderId: "93562807993",
    appId: "1:93562807993:web:cf0c657456562810e31d68",
    measurementId: "G-B3VPR56S7N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.analytics();
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();

  export { db, auth, storage, firebase };
  export default firebaseApp;