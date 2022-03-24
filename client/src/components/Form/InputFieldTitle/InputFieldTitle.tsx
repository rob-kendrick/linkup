import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './InputFieldTitle.css';

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

const InputFieldTitle = React.forwardRef<HTMLInputElement, Props>(
  ({
    className, errorMessage, label, rows, type, name, ...props
  }, ref) => (
    <div
      className={`${className} form-wrap`}
    >
      <div className="input-wrap">
        {label && <label htmlFor={name}>{label}</label>}
        <input
        // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          ref={ref as React.LegacyRef<HTMLInputElement>}
          type={type || 'text'}
          name={name}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    </div>
  ),
);

export default InputFieldTitle;
