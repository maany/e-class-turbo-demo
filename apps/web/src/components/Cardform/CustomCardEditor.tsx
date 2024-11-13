import React from 'react';
import ImageUploader from './ImageUploader';
import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';

interface CustomCardEditorProps {
  // Add any props if needed
}

const CustomCardEditor: React.FC<CustomCardEditorProps> = () => {
  return (
    <section className="w-[483px] bg-stone-800 border border-stone-700 rounded-lg shadow-lg">
      <div className="flex flex-col h-full">
        <header className="flex gap-4 items-center px-6 py-4 border-b border-stone-700">
          <h1 className="text-lg font-semibold text-white">
            Custom card
          </h1>
          {/* Placeholder for image
          <div className="h-8 w-24 bg-stone-700 rounded" /> */}
        </header>
        
        <div className="flex flex-col space-y-6 p-6">
          <ImageUploader />
          
          <div className="space-y-4">
            <TextInput 
              label="Title" 
              placeholder="e.g. Coaching on demand"
            />
            <TextAreaInput 
              label="Description" 
              placeholder="Max 320 characters"
            />
            <TextInput 
              label="Badge" 
              placeholder="e.g. Package"
            />
            <TextInput 
              label="Button text" 
              placeholder="e.g. from CHF 3408"
            />
            <TextInput 
              label="Card link" 
              placeholder="e.g. https://justdoad.com/offers"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCardEditor;