import  firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAwPUIVqQC_dbBfmxsyhVfLCRjNClYXHHc",
  authDomain: "facebook-clone-8b3fb.firebaseapp.com",
  databaseURL: "https://facebook-clone-8b3fb.firebaseio.com",
  projectId: "facebook-clone-8b3fb",
  storageBucket: "facebook-clone-8b3fb.appspot.com",
  messagingSenderId: "247908755676",
  appId: "1:247908755676:web:93f4bb153616c21a76ec19",
  measurementId: "G-P1NB9RPKH2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;