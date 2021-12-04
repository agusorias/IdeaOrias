import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBgy3hlhCq9_FEY6lSvxpHAE6NoPXy6HUA",
  authDomain: "e-commerce-orias.firebaseapp.com",
  projectId: "e-commerce-orias",
  storageBucket: "e-commerce-orias.appspot.com",
  messagingSenderId: "5404881610",
  appId: "1:5404881610:web:4d1d357338777c10d3ba33",
  measurementId: "G-RRCF0EQHL5"
};
  
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}