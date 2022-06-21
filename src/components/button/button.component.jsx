import {
  BaseButton,
  ButtonSpinner,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_STYLE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (btnType = BUTTON_STYLE_CLASSES.base) => {
  return {
    [BUTTON_STYLE_CLASSES.base]: BaseButton,
    [BUTTON_STYLE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_STYLE_CLASSES.inverted]: InvertedButton,
  }[btnType];
};

const Button = ({ children, isLoading, btnType, ...otherProps }) => {
  const CustomBtn = getButton(btnType);
  return (
    <CustomBtn disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomBtn>
  );
};

export default Button;
