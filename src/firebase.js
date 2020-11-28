import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAr5HgdbgIHCyheuh_Zbq_MDt_nRQiXvvE",
    authDomain: "twitter-clone-0.firebaseapp.com",
    databaseURL: "https://twitter-clone-0.firebaseio.com",
    projectId: "twitter-clone-0",
    storageBucket: "twitter-clone-0.appspot.com",
    messagingSenderId: "685782228130",
    appId: "1:685782228130:web:e47c95aefc890d578ccbfb",
    measurementId: "G-QYJ2RM9XRQ"
}; 

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;