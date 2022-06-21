import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.action';

import Button, { BUTTON_STYLE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { ButtonContainer, SignInContainer } from './sign-in-form.styles.jsx';
const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    dispatch(googleSignInStart());
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();

      alert('signed succed');
    } catch (err) {
      if (err.code === 'auth/wrong-password') {
        alert('Email or Password wrong!');
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
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

        <ButtonContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            btnType={BUTTON_STYLE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
