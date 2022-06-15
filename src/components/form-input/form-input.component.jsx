import './form-input.styles.jsx';
import { Group, Input, Label } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && <Label shrink={otherProps.value.length}>{label}</Label>}
    </Group>
  );
};

export default FormInput;
