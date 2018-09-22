import * as React from 'react';
import { preventDefault } from '../../helpers';

interface FormProps {
  onSubmit: () => any;
}

const Form: React.SFC<FormProps> = ({ onSubmit, children }) => (
  <form onSubmit={preventDefault(onSubmit)}>{children}</form>
);

export default Form;
