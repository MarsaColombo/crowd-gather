// src/components/auth/AuthCard.tsx
import React from 'react';
import { Card, CardBody } from "@heroui/react";

interface AuthCardProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const AuthCard: React.FC<AuthCardProps> = ({ 
  children, 
  id = "auth-form",
  className = "" 
}) => {
  return (
    <Card 
      id={id} 
      className={`w-full max-w-md glass-card border-gray-700 opacity-0 ${className}`}
    >
      <CardBody className="p-6">
        {children}
      </CardBody>
    </Card>
  );
};

export default AuthCard;