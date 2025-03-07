// src/app/auth/signup/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Input, Button, Checkbox, Tooltip } from '@heroui/react';
import AuthLayout from '@/components/auth/AuthLayout';

// Custom validation helpers
const validateEmail = (email: string) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password: string) => {
  // At least 8 characters, one uppercase, one lowercase, one number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(password);
};

export default function SignupPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Validation and UI states
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes with validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Clear previous error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: '' }));

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Comprehensive form validation
  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Veuillez confirmer le mot de passe';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.values(newErrors).every((error) => error === '');
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check terms acceptance
    if (!acceptedTerms) {
      alert("Veuillez accepter les conditions d'utilisation");
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Set submitting state
    setIsSubmitting(true);

    try {
      // Simulate signup process
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect or show success message
      window.location.href = '/events';
    } catch (error) {
      console.error('Signup error:', error);
      alert("Erreur lors de l'inscription. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout type="signup">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name Input */}
        <div>
          <Input
            type="text"
            name="name"
            label="Nom Complet"
            placeholder="Entrez votre nom complet"
            value={formData.name}
            onChange={handleChange}
            variant="bordered"
            color={errors.name ? 'danger' : 'default'}
            errorMessage={errors.name}
            classNames={{
              inputWrapper: 'auth-input',
              input: 'text-white',
            }}
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />
        </div>

        {/* Email Input */}
        <div>
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Entrez votre email"
            value={formData.email}
            onChange={handleChange}
            variant="bordered"
            color={errors.email ? 'danger' : 'default'}
            errorMessage={errors.email}
            classNames={{
              inputWrapper: 'auth-input',
              input: 'text-white',
            }}
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          />
        </div>

        {/* Password Input */}
        <div>
          <Tooltip
            content="Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre"
            placement="bottom"
            color="primary"
          >
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              label="Mot de passe"
              placeholder="Créez un mot de passe"
              value={formData.password}
              onChange={handleChange}
              variant="bordered"
              color={errors.password ? 'danger' : 'default'}
              errorMessage={errors.password}
              classNames={{
                inputWrapper: 'auth-input',
                input: 'text-white',
              }}
              startContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              }
              endContent={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="focus:outline-none"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              }
            />
          </Tooltip>
        </div>

        {/* Confirm Password Input */}
        <div>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            label="Confirmer le mot de passe"
            placeholder="Confirmez votre mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            variant="bordered"
            color={errors.confirmPassword ? 'danger' : 'default'}
            errorMessage={errors.confirmPassword}
            classNames={{
              inputWrapper: 'auth-input',
              input: 'text-white',
            }}
            startContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            }
          />
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="mt-4">
          <Checkbox
            isSelected={acceptedTerms}
            onValueChange={setAcceptedTerms}
            color="primary"
            classNames={{
              label: 'text-gray-300 text-sm',
            }}
          >
            J&apos;accepte les{' '}
            <Link href="/terms" className="text-primary-500 hover:underline">
              Conditions d&apos;utilisation
            </Link>{' '}
            et la{' '}
            <Link href="/privacy" className="text-primary-500 hover:underline">
              Politique de confidentialité
            </Link>
          </Checkbox>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          color="primary"
          className="w-full mt-4"
          size="lg"
          isLoading={isSubmitting}
          isDisabled={!acceptedTerms || isSubmitting}
        >
          {isSubmitting ? 'Inscription en cours...' : "S'inscrire"}
        </Button>
      </form>
    </AuthLayout>
  );
}
