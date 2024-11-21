import React from 'react';
import { useTheme } from '../context/Themecontext';

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className={`p-4 text-center text-2xl font-bold 
      ${theme === 'student' ? 'bg-student-primary text-student-secondary'
      : theme === 'coach' ? 'bg-coach-primary text-coach-secondary'
      : 'bg-admin-primary text-admin-secondary'}`}
    >
      {theme === 'student' ? 'Student Dashboard' 
       : theme === 'coach' ? 'Coach Dashboard' 
       : 'Admin Dashboard'}
    </header>
  );
};

export default Header;
