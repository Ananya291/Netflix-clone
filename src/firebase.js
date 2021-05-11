import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC-cbexP0DXAxxFDcgTP_b2zm5TGLLLVuE",
    authDomain: "netflix-clone29.firebaseapp.com",
    projectId: "netflix-clone29",
    storageBucket: "netflix-clone29.appspot.com",
    messagingSenderId: "257785135414",
    appId: "1:257785135414:web:80a2789a47cca8c300b397",
    measurementId: "G-FY0XQN60VZ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;