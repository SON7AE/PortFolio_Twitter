// Firebase 관련 설정
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyC7kNugGX8uLT8MEjdsF4QOZkZ5g083_L0',
    authDomain: 'vue3-twitter-c751a.firebaseapp.com',
    projectId: 'vue3-twitter-c751a',
    storageBucket: 'vue3-twitter-c751a.appspot.com',
    messagingSenderId: '924559580754',
    appId: '1:924559580754:web:6d878bb300f897df9c898b',
    measurementId: 'G-NN89TEPTGY',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const USER_COLLECTION = db.collection('users');
