import {
  BaseButton,
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

const Button = ({ children, onClick, btnType }) => {
  const CustomBtn = getButton(btnType);
  return <CustomBtn onClick={onClick}>{children}</CustomBtn>;
};

export default Button;
