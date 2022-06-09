import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  useEffect(() => {
    const getResponse = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);

      if (response) {
        //creating our user inside our DATABASE!
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };

    getResponse();
  });

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In PAGE!!!</h1>;
      <button onClick={logGoogleUser}>sign In with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        sign In with Google REDIRECT
      </button>
    </div>
  );
};

export default SignIn;
