import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDvFuNYAnCIemDJqK7RFLqECutwn0JQtwo',
  authDomain: 'ig-reels-21151.firebaseapp.com',
  projectId: 'ig-reels-21151',
  storageBucket: 'ig-reels-21151.appspot.com',
  messagingSenderId: '1041469897201',
  appId: '1:1041469897201:web:4747624ff9414033c36c50',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
