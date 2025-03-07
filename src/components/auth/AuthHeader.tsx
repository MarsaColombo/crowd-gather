// src/components/auth/AuthHeader.tsx
import React from 'react';

interface AuthHeaderProps {
  title: string;
  id?: string;
  className?: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ 
  title, 
  id = "auth-text",
  className = ""
}) => {
  return (
    <div id={id} className={`text-center mb-8 opacity-0 ${className}`}>
      <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
      <h2 className="text-4xl font-bold text-primary-500">eventrue</h2>
    </div>
  );
};

export default AuthHeader;