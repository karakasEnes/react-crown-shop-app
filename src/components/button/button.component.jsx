import './button.styles.scss';

const BUTTON_STYLE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, btnType }) => {
  return (
    <button className={`button-container ${BUTTON_STYLE_CLASSES[btnType]}`}>
      {children}
    </button>
  );
};

export default Button;
