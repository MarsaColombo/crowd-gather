// src/components/layout/PageLayout.tsx
import React from 'react';
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
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
  title = "Eventrue",
  showBackButton = false,
  showNavbar = true,
  loading = false,
  className = "",
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed header */}
      {showNavbar && (
        <Navbar maxWidth="xl" isBordered className="fixed top-0 w-full z-40">
          <NavbarContent justify="start">
            {showBackButton && (
              <Button
                isIconOnly
                variant="light"
                onClick={() => window.history.back()}
                aria-label="Back"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
            )}
            <NavbarBrand>
              <Link href="/" className="font-bold text-inherit">
                {title}
              </Link>
            </NavbarBrand>
          </NavbarContent>
          
          <NavbarContent justify="end">
            <NavbarItem>
              <Button 
                as={Link} 
                color="primary" 
                href="/profile" 
                variant="flat"
                isIconOnly
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      )}
      
      {/* Main content area */}
      <main className={`flex-grow pt-16 ${className}`}>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner 
              color="primary" 
              label="Loading..." 
              size="lg"
              labelColor="primary"
            />
          </div>
        ) : (
          children
        )}
      </main>
      
      {/* Footer (stays at the bottom) */}
      <footer className="mt-auto bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Eventrue</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Share photos at public events
              </p>
            </div>
            
            <div className="flex gap-4">
              <HeroUILink as={Link} href="/about" color="foreground" underline="hover">
                About
              </HeroUILink>
              <HeroUILink as={Link} href="/privacy" color="foreground" underline="hover">
                Privacy
              </HeroUILink>
              <HeroUILink as={Link} href="/terms" color="foreground" underline="hover">
                Terms
              </HeroUILink>
              <HeroUILink as={Link} href="/contact" color="foreground" underline="hover">
                Contact
              </HeroUILink>
            </div>
            
            <div className="text-center md:text-right text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Eventrue - All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;