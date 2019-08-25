import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBOm47fDQ2qmbN2j2lrF_DFVOH_PxRUi8Y",
    authDomain: "segma-green-feeds-db.firebaseapp.com",
    databaseURL: "https://segma-green-feeds-db.firebaseio.com",
    projectId: "segma-green-feeds-db",
    storageBucket: "",
    messagingSenderId: "1084286123995",
    appId: "1:1084286123995:web:5bcac1c3b5a636ca"
  };



  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new  Date();

      try{
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
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;