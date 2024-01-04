import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAdboSkZsgTh0VMCPXo_1Kh33mzHKmxDgo",
    authDomain: "piggybank-f6c3d.firebaseapp.com",
    projectId: "piggybank-f6c3d",
    storageBucket: "piggybank-f6c3d.appspot.com",
    messagingSenderId: "847931417366",
    appId: "1:847931417366:web:1a9aebf1a187f8ad01e637"
  }

//   init firebase 
firebase.initializeApp(firebaseConfig)

// init service 
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
