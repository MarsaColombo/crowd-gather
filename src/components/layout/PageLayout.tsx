// src/components/layout/PageLayout.tsx
import React from 'react';
import Navbar from '../Navbar';
import { 
  Divider, 
  Button, 
  Link as HeroUILink,
  Spinner
} from "@heroui/react";
import Link from 'next/link';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBackButton?: boolean;
  showNavbar?: boolean;
  loading?: boolean;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  showBackButton = false,
  showNavbar = true,
  loading = false,
  className = "",
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* En-tête fixe */}
      {showNavbar && <Navbar title={title} showBackButton={showBackButton} />}
      
      {/* Contenu principal qui prend tout l'espace disponible */}
      <main className={`flex-grow pt-16 ${className}`}>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner 
              color="primary" 
              label="Chargement en cours..." 
              size="lg"
              labelColor="primary"
            />
          </div>
        ) : (
          children
        )}
      </main>
      
      {/* Pied de page qui reste en bas */}
      <footer className="mt-auto bg-white dark:bg-gray-900 shadow-md py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Eventrue</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Plateforme de partage de photos lors d&apos;événements politiques.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase mb-4">Liens utiles</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <HeroUILink as={Link} href="/events" color="foreground" underline="hover">
                    Tous les événements
                  </HeroUILink>
                </li>
                <li>
                  <HeroUILink as={Link} href="/about" color="foreground" underline="hover">
                    À propos
                  </HeroUILink>
                </li>
                <li>
                  <HeroUILink as={Link} href="/contact" color="foreground" underline="hover">
                    Contact
                  </HeroUILink>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <HeroUILink as={Link} href="/faq" color="foreground" underline="hover">
                    FAQ
                  </HeroUILink>
                </li>
                <li>
                  <HeroUILink as={Link} href="/help" color="foreground" underline="hover">
                    Centre d&apos;aide
                  </HeroUILink>
                </li>
                <li>
                  <HeroUILink as={Link} href="/terms" color="foreground" underline="hover">
                    Conditions d&apos;utilisation
                  </HeroUILink>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <Button isIconOnly variant="light" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Button>
                <Button isIconOnly variant="light" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
                <Button isIconOnly variant="light" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          
          <Divider className="my-6" />
          
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Eventrue - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;

