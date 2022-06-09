import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In PAGE!!!</h1>;
      <button onClick={logGoogleUser}>sign In with Google</button>
    </div>
  );
};

export default SignIn;
