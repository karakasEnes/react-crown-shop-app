import { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    console.log('signIn fired');
    const response = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // console.log('formFields', formFields);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
      console.log(response);
      alert('signed succed');
    } catch (e) {
      if (e.code === 'auth/wrong-password') {
        alert('Email or Password wrong!');
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have any account?</h2>
      <span>Sign IN with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' btnType={'google'} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
