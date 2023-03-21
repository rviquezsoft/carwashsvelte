import firebase from 'firebase/compat/app'
import 'firebase/compat/database'


const firebaseConfig = {
    apiKey: "AIzaSyA6nAQ1xgsCY6w1jgS_TpbcRAvRiPV0d4A",
    authDomain: "carwashcentercr-c70c7.firebaseapp.com",
    databaseURL: "https://carwashcentercr-c70c7-default-rtdb.firebaseio.com",
    projectId: "carwashcentercr-c70c7",
    storageBucket: "carwashcentercr-c70c7.appspot.com",
    messagingSenderId: "311324575522",
    appId: "1:311324575522:web:840bf6e4d3944ffc0f477b",
    measurementId: "G-CENRR12RF4"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.database()

