
import firebase from 'firebase';

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyBF-iw65xtwky1WxRgRfJLEV3kyfwnaJ4I",
//     authDomain: "pharmacy-1976c.firebaseapp.com",
//     databaseURL: "https://pharmacy-1976c-default-rtdb.firebaseio.com",
//     projectId: "pharmacy-1976c",
//     storageBucket: "pharmacy-1976c.appspot.com",
//     messagingSenderId: "911023950533",
//     appId: "1:911023950533:web:242de53c4d9dd3eb33beac"
// });

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC90MaIoSiDZ8jD54Mj8UZwSL-5Y-x6KFw",
    authDomain: "pharmacy-new-ae945.firebaseapp.com",
    projectId: "pharmacy-new-ae945",
    storageBucket: "pharmacy-new-ae945.appspot.com",
    messagingSenderId: "31862487153",
    appId: "1:31862487153:web:2b8385d5ae66496a6d43d0"
});

const db = firebaseApp.firestore();

export default db;