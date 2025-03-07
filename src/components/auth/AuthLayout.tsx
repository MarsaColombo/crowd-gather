// src/components/auth/AuthLayout.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Divider } from '@heroui/react';
import SocialLoginButtons from './SocialLoginButtons';

interface AuthLayoutProps {
  children: React.ReactNode;
  type: 'welcome' | 'login' | 'signup';
  heroImage?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  type,
  heroImage = '/images/political-event-1.jpg',
}) => {
  // Determine title and subtitle based on type
  const getTitleAndSubtitle = () => {
    switch (type) {
      case 'welcome':
        return {
          title: 'Bienvenue',
          subtitle: 'Découvrez les événements autour de vous',
        };
      case 'login':
        return {
          title: 'Se Connecter',
          subtitle: 'Connectez-vous à votre compte',
        };
      case 'signup':
        return {
          title: 'Créer un Compte',
          subtitle: 'Inscrivez-vous pour rejoindre la communauté',
        };
    }
  };

  const { title, subtitle } = getTitleAndSubtitle();

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-hidden pb-4">
      {/* Hero Image Section */}
      <div className="relative" style={{ height: '70vh' }}>
        {/* Main Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image src={heroImage} alt="Événement politique" fill className="object-cover" priority />
          {/* Overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Curved Divider */}
        <div className="absolute -bottom-1 left-0 right-0 h-32 w-full">
          <div
            className="absolute inset-0 bg-white rounded-t-full"
            style={{
              transform: 'rotate(-12deg) scale(2)',
              transformOrigin: 'top center',
              bottom: '-40px',
              height: '150%',
              width: '120%',
              left: '-10%',
            }}
          ></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-grow flex flex-col items-center justify-start px-6 pt-6 bg-white relative z-10">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
          <h2 className="text-5xl font-bold text-blue-500 mb-4">eventrue</h2>
          <p className="text-gray-600 mb-8">{subtitle}</p>

          {/* Main Content (Form or Action) */}
          {children}

          {/* Switch Between Login/Signup */}
          <div className="text-center mt-8">
            {type === 'login' && (
              <p className="text-gray-400">
                Pas encore de compte ?{' '}
                <Link
                  href="/auth/signup"
                  className="text-primary-500 font-semibold hover:underline"
                >
                  Inscrivez-vous
                </Link>
              </p>
            )}

            {type === 'signup' && (
              <p className="text-gray-400">
                Déjà un compte ?{' '}
                <Link href="/auth/login" className="text-primary-500 font-semibold hover:underline">
                  Connectez-vous
                </Link>
              </p>
            )}

            {type === 'welcome' && <div></div>}
          </div>

          {/* Social Login Divider */}
          <Divider className="my-6 bg-gray-700" />
          <span className="text-gray-400 px-2">ou continuer avec</span>

          {/* Social Login Buttons */}
          <SocialLoginButtons />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
