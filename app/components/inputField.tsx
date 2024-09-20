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
    } else if (inputValue < 1) {
      setError('Value cannot be lower than 1');
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
          className={`${inputClassName} min-w-44` || ''}
          min={1}
          max={max}
        />
      </label>
      {error && <div className='text-error mt-2.5'>{error}</div>}
    </div>
  );
};

export default InputField;
