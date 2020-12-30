import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvrwwOB_TorBUpWo0bq4UHX0xkhIwD5w8",
    authDomain: "crown-db-91237.firebaseapp.com",
    projectId: "crown-db-91237",
    storageBucket: "crown-db-91237.appspot.com",
    messagingSenderId: "368646654268",
    appId: "1:368646654268:web:314b40e3a460ac7226f639",
    measurementId: "G-M5KWGSVCDX"
};

// creating data and storing in database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    // console.log(firestore.doc('/users/ada7343bsdhg'));
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        // then we have to create data and store it
        const { displayName, email } = userAuth;
        const createdDate = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdDate,
                ...additionalData
            });
        }catch (error) {
            console.log('error in creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// for google sign 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); // this will give user option to select gmail from already logged in or logged out
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
