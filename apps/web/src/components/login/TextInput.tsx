"use client";
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface TextInputProps {
  label: string;
  placeholder: string;
  type: 'text' | 'email' | 'password';
  showPasswordToggle?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  onBlur?: () => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  type,
  showPasswordToggle = false,
  value,
  onChange,
  error,
  onBlur
}) => {
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`flex flex-col justify-center px-3 py-1.5 w-full text-xl rounded-lg border border-solid bg-stone-950 
    ${error ? 'border-red-500' : 'border-stone-800'} min-h-[40px] text-stone-50 pr-10`} // Add pr-10 for padding
          aria-label={label}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff className="w-6 h-6 text-stone-400" />
            ) : (
              <Eye className="w-6 h-6 text-stone-400" />
            )}
          </button>
        )}
      </div>
      {error && (
        <span className="mt-1 text-sm text-red-500">{error}</span>
      )}
    </div>
  );
};
export default TextInput;