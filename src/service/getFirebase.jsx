import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCq_Zbtr96XSRyPaG-NtzRuLYbwFRD1TBo",
    authDomain: "primerproyectoreactjs-c2794.firebaseapp.com",
    projectId: "primerproyectoreactjs-c2794",
    storageBucket: "primerproyectoreactjs-c2794.appspot.com",
    messagingSenderId: "820466253797",
    appId: "1:820466253797:web:a455c589a16c35510e390c"
  };
  
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}