import React from 'react';

interface TextAreaInputProps {
  label: string;
  placeholder: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col mt-3.5 w-full max-md:max-w-full">
      <label htmlFor={`textarea-${label}`} className="gap-1 self-start text-sm leading-none whitespace-nowrap text-stone-300">
        {label}
      </label>
      <div className="flex flex-col mt-2 w-full text-sm leading-5 text-stone-300 max-md:max-w-full">
        <div className="flex overflow-hidden relative gap-2 justify-center items-start px-3 pt-2.5 pb-4 w-full rounded-lg border border-solid bg-stone-950 border-stone-800 min-h-[104px] max-md:max-w-full">
          <textarea
            id={`textarea-${label}`}
            placeholder={placeholder}
            className="z-0 flex-1 shrink basis-0 max-md:max-w-full bg-transparent border-none resize-none focus:outline-none text-stone-300"
          />
        </div>
      </div>
    </div>
  );
};

export default TextAreaInput;