// src/app/profile/change-password/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Input } from '@heroui/react';

export default function ChangePasswordPage() {
  // Password state
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Validation error state
  const [errors, setErrors] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));

    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validate the form
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Check old password
    if (!passwordData.oldPassword) {
      newErrors.oldPassword = 'Current password is required';
      valid = false;
    }

    // Check new password
    if (!passwordData.newPassword) {
      newErrors.newPassword = 'New password is required';
      valid = false;
    } else if (passwordData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
      valid = false;
    }

    // Check password confirmation
    if (!passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      valid = false;
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would handle the actual password update
      console.log('Password data to save:', passwordData);

      // Redirect back to profile
      window.location.href = '/profile';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-6 px-4 flex items-center">
        <Link href="/profile" className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <h1 className="text-xl font-bold">Change Password</h1>
      </div>

      {/* Password Form */}
      <form onSubmit={handleSubmit} className="px-4 py-6 space-y-6">
        <div>
          <Input
            type="password"
            label="Old Password"
            name="oldPassword"
            value={passwordData.oldPassword}
            onChange={handleChange}
            variant="bordered"
            isRequired
            color={errors.oldPassword ? 'danger' : 'default'}
            errorMessage={errors.oldPassword}
          />
        </div>

        <div>
          <Input
            type="password"
            label="New Password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handleChange}
            variant="bordered"
            isRequired
            color={errors.newPassword ? 'danger' : 'default'}
            errorMessage={errors.newPassword}
          />
        </div>

        <div>
          <Input
            type="password"
            label="Retype New Password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handleChange}
            variant="bordered"
            isRequired
            color={errors.confirmPassword ? 'danger' : 'default'}
            errorMessage={errors.confirmPassword}
          />
        </div>

        <Button type="submit" color="primary" fullWidth size="lg" className="mt-8">
          Save
        </Button>
      </form>
    </div>
  );
}
