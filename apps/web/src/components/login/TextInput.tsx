import React, { useState } from 'react';
import Image from 'next/image';
import eyeIcon from '../../public/icons/eye.png'; // Update the path to your eye icon image

interface TextInputProps {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'password';
  showPasswordToggle?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder, type, showPasswordToggle = false }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-full min-h-[64px] mb-2">
      <label className="flex-1 shrink gap-2 self-stretch w-full text-base leading-none whitespace-nowrap min-h-[22px] text-stone-300">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          className="flex flex-col justify-center px-3 py-1.5 w-full text-xl rounded-lg border border-solid bg-stone-950 border-stone-800 min-h-[40px] text-stone-50"
          aria-label={label}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <Image
              src={eyeIcon}
              alt={showPassword ? 'Hide password' : 'Show password'}
              width={24}
              height={24}
              className="object-contain shrink-0 self-stretch my-auto aspect-square"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInput;
