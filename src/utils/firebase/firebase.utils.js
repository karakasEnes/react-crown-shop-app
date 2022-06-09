import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3v0OJLZMFZpHcCYZ_6hHnw6TYRNZnbl0',
  authDomain: 'crowndatabase-7f61d.firebaseapp.com',
  projectId: 'crowndatabase-7f61d',
  storageBucket: 'crowndatabase-7f61d.appspot.com',
  messagingSenderId: '402777980241',
  appId: '1:402777980241:web:c9732bb50cfcf21395a770',
};

const myFirebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log('userDocRef', userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log('userSnapshot ', userSnapShot);
  console.log(userSnapShot.exists());

  //user doesn'T exist!
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log('error while creating the user!', e.message);
    }
  }

  //user exists!
  return userDocRef;
};
