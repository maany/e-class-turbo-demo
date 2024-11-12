
import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;


}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',


}) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="text-sm font-semibold mb-1 text-gray-700">{label}</label>}
      <div className="relative flex items-center">
       
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full py-2 px-4 rounded-md borde`}
        />
      </div>
   
    </div>
  );
};

export default Input;