import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      <h1>Sign In PAGE!!!</h1>;
      <button onClick={logGoogleUser}>sign In with Google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
