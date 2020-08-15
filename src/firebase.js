import firebase from 'firebase/firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAcIpbTN1O3t__Jx2GXpduKDUVcs7ueuI0",
    authDomain: "feedback-form-f2e58.firebaseapp.com",
    databaseURL: "https://feedback-form-f2e58.firebaseio.com",
    projectId: "feedback-form-f2e58",
    storageBucket: "feedback-form-f2e58.appspot.com",
    messagingSenderId: "442757154237",
    appId: "1:442757154237:web:f283ba71dd3cf957a43ed4",
    measurementId: "G-VNNK79M33T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// const db=firebase.firestore();
// db.settings({timestampsInSnapshots:true});

export default firebase;