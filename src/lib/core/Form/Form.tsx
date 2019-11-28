import * as React from 'react';
import { preventDefault } from '../../helpers';
import FormSection from './FormSection';
interface FormProps {
  className?: string;
  onSubmit: () => any;
}

const Form: React.SFC<FormProps> = ({ className, onSubmit, children }) => (
  <form className={className} onSubmit={preventDefault(onSubmit)}>
    {children}
  </form>
);

export default Object.assign(Form, {
  Section: FormSection,
});
