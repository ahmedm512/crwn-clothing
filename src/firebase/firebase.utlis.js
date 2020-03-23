import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBGg-kWqufVzb30oVyXTSxeCjD7yb6YtOc",
    authDomain: "crwn-db-2ff56.firebaseapp.com",
    databaseURL: "https://crwn-db-2ff56.firebaseio.com",
    projectId: "crwn-db-2ff56",
    storageBucket: "crwn-db-2ff56.appspot.com",
    messagingSenderId: "107363942920",
    appId: "1:107363942920:web:4869bd249c07dd029c07bd",
    measurementId: "G-5D8Y30MDQR"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();
 console.log(snapShot);

 if(!snapShot.exists) {
   const { displayName, email } = userAuth;
   const createAt = new Date();

   try {
     await userRef.set({
       displayName,
       email,
       createAt,
       ...additionalData
     })
   } catch (error) {
     
    console.log('error creating user', error.message);

   }
 }
 return userRef;
};

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  const providerF = new firebase.auth.FacebookAuthProvider();

  providerF.setCustomParameters({prompt: 'select_account'});
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export const signInWithFaceBook = () => auth.signInWithPopup(providerF);



  export default firebase;