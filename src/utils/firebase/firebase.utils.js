import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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
