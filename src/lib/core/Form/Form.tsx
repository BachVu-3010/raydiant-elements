import * as React from 'react';
import { preventDefault } from '../../helpers';

interface FormProps {
  className?: string;
  onSubmit: () => any;
}

const Form: React.SFC<FormProps> = ({ className, onSubmit, children }) => (
  <form className={className} onSubmit={preventDefault(onSubmit)}>
    {children}
  </form>
);

export default Form;
