// src/app/auth/login/page.tsx
"use client";

import React, { useState } from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import { 
  Input, 
  Button 
} from "@heroui/react";
import { redirect } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic here
    console.log('Login attempt:', { email, password });
    // For demo, redirect to events page
    redirect('/events')
  };

  return (
    <AuthLayout type="login">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          label="Email"
          placeholder="Entrez votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="bordered"
          classNames={{
            inputWrapper: "auth-input",
            input: "text-white"
          }}
          required
        />
        
        <Input
          type={showPassword ? "text" : "password"}
          label="Mot de passe"
          placeholder="Entrez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="bordered"
          classNames={{
            inputWrapper: "auth-input",
            input: "text-white"
          }}
          endContent={
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="focus:outline-none"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          }
          required
        />
        
        <div className="flex justify-end">
          <Button variant="light" size="sm" color="primary">
            Mot de passe oublié ?
          </Button>
        </div>
        
        <Button 
          type="submit" 
          color="primary" 
          className="w-full"
          size="lg"
        >
          Connexion
        </Button>
      </form>
    </AuthLayout>
  );
}