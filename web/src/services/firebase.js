import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBi3P8LT9_liacvk856NuGk_GhFr1e_jN4",
  authDomain: "servicosgr.firebaseapp.com",
  projectId: "servicosgr",
  storageBucket: "servicosgr.appspot.com",
  messagingSenderId: "183534010067",
  appId: "1:183534010067:web:7748dd3443c6b647e51e26"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const auth = firebase.auth();

export { firebase, auth };

