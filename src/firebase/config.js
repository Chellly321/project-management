import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA6ZIlbrRmUIA_qqopyZPVPhCIIJ9wEiYw",
    authDomain: "thedodjomanager.firebaseapp.com",
    projectId: "thedodjomanager",
    storageBucket: "thedodjomanager.appspot.com",
    messagingSenderId: "315381308561",
    appId: "1:315381308561:web:b58ce35652ad647ac93330"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp, projectStorage}