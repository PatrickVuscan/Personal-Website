import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDoEvFwbDCM5eZlL6BUYIcgYHELH9d1h4I',
  authDomain: 'personal-website-vuscan.firebaseapp.com',
  databaseURL: 'https://personal-website-vuscan.firebaseio.com',
  projectId: 'personal-website-vuscan',
  storageBucket: 'personal-website-vuscan.appspot.com',
  messagingSenderId: '873198924041',
  appId: '1:873198924041:web:c773bac2c0ed2cac9363d8',
  measurementId: 'G-JS9CNZVKRT',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
