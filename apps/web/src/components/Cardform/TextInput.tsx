import React from 'react';

interface TextInputProps {
  label: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col mt-3.5 w-full text-stone-300 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <label htmlFor={`input-${label}`} className="flex-1 shrink gap-2 self-stretch w-full text-sm leading-none whitespace-nowrap min-h-[22px] max-md:max-w-full">
          {label}
        </label>
        <input
          id={`input-${label}`}
          type="text"
          placeholder={placeholder}
          className="flex flex-col justify-center px-3 py-2 w-full text-base rounded-lg border border-solid bg-stone-950 border-stone-800 min-h-[40px] max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default TextInput;