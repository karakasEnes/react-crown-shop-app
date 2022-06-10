import './button.styles.scss';

const BUTTON_STYLE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, onClick, btnType }) => {
  return (
    <button
      onClick={onClick}
      className={`button-container ${BUTTON_STYLE_CLASSES[btnType]}`}
    >
      {children}
    </button>
  );
};

export default Button;
