import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './InputTextField.css';

type Props = Partial<UseFormRegisterReturn> & {
  id?: string;
  value?: string;
  type?: string;
  label?: string;
  rows?: number;
  name?: string;
  placeholder?: string;
  className?: string;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const InputTextField = React.forwardRef<HTMLInputElement, Props>(
  ({
    className, errorMessage, label, type, name, ...props
  }, ref) => (
    <div className={`${className} itf__wrap`}>
      <input
        className="itf__input"
        {...props}
        ref={ref as React.LegacyRef<HTMLInputElement>}
        type={type || 'text'}
        name={name}
        required
      />
      {label && <label className={`itf__label ${(type === 'datetime-local') && 'itf__label-datetime'}`} htmlFor={name}>{label}</label>}
      {errorMessage && <p className="itf__error">{errorMessage}</p>}
    </div>
  ),
);

  type InputTextAreaProps = Props & {
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  };

const InputTextArea = React.forwardRef<HTMLTextAreaElement, InputTextAreaProps>(
  ({
    className, id, errorMessage, label, rows, type, name, ...props
  }, ref) => (
    <div className={`${className} itf__wrap`}>
      <textarea
        className="itf__input itf__textarea"
        id={id}
        {...props}
        ref={ref as unknown as React.LegacyRef<HTMLTextAreaElement>}
        rows={rows}
        name={name}
        required
      />
      {label && <label className="itf__label" htmlFor={name}>{label}</label>}
      {errorMessage && <p className="itf__error">{errorMessage}</p>}
    </div>
  ),
);

export { InputTextField, InputTextArea };
