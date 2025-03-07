// src/app/welcome/page.tsx
'use client';

import React from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import { Button } from '@heroui/react';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <AuthLayout type="welcome">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Découvrez les événements politiques près de chez vous
        </h1>
        <div className="flex flex-col space-y-4 mt-8">
          <Button color="primary" size="lg" as={Link} href="/auth/signup" className="w-full">
            Créer un compte
          </Button>
          <Button
            color="secondary"
            size="lg"
            variant="bordered"
            as={Link}
            href="/auth/login"
            className="w-full"
          >
            Se connecter
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}
