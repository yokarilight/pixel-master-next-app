import React, { useState } from 'react';

interface InputFieldProps {
  labelName: string;
  value: number;
  max: number;
  onChange: (value: number) => void;
  inputClassName?: string;
}

const InputField = ({ labelName, value, max, onChange, inputClassName }: InputFieldProps) => {
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value);
    
    if (inputValue > max) {
      setError(`Value cannot be greater than ${max}`);
    } else {
      setError('');
      onChange(inputValue);
    }
  };

  return (
    <div>
      <label>
        {labelName}:
        <input
          type='number'
          value={value}
          onChange={handleChange}
          className={inputClassName || ''}
          max={max}
        />
      </label>
      {error && <div className='text-error'>{error}</div>}
    </div>
  );
};

export default InputField;
