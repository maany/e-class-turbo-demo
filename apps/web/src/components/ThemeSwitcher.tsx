import React from 'react';
import { useTheme } from '../context/Themecontext';

const ThemeSwitcher: React.FC = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex justify-center gap-4 mt-4">
      <button onClick={() => setTheme('student')} className="px-4 py-2 bg-student-primary text-student-secondary rounded">
        Student
      </button>
      <button onClick={() => setTheme('coach')} className="px-4 py-2 bg-coach-primary text-coach-secondary rounded">
        Coach
      </button>
      <button onClick={() => setTheme('admin')} className="px-4 py-2 bg-admin-primary text-admin-secondary rounded">
        Admin
      </button>
    </div>
  );
};

export default ThemeSwitcher;
