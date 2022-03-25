import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './InputTextField.css';

type Props = Partial<UseFormRegisterReturn> & {
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
    className, errorMessage, label, rows, type, name, ...props
  }, ref) => (
    <div className={`${className} input-wrap`}>
      <input
        className="form-input"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        ref={ref as React.LegacyRef<HTMLInputElement>}
        type={type || 'text'}
        name={name}
        required
      />
      {label && <label className="input-label" htmlFor={name}>{label}</label>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  ),
);

  type InputTextAreaProps = Props & {
    rows?: number;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  };

const InputTextArea = React.forwardRef<HTMLTextAreaElement, InputTextAreaProps>(
  ({
    className, label, rows, type, name, ...props
  }, ref) => (
    <div className={`${className} input-wrap`}>
      <textarea
        className="form-input"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        ref={ref as unknown as React.LegacyRef<HTMLTextAreaElement>}
        rows={rows}
        required
      />
      {label && <label className="input-label" htmlFor={name}>{label}</label>}
    </div>
  ),
);

export { InputTextField, InputTextArea };
