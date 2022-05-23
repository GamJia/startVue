import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig={
    apiKey: "AIzaSyCsd3Ozdo6pTLhkLkZ-YZ-8vWhviry3SJU",
    authDomain: "store-2ac7d.firebaseapp.com",
    projectId: "store-2ac7d",
    storageBucket: "store-2ac7d.appspot.com",
    messagingSenderId: "215287012462",
    appId: "1:215287012462:web:e6db79a3f881940e931a7f"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const timestamp=firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();