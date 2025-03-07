// src/app/help/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Input, Card, Accordion, AccordionItem } from '@heroui/react';

export default function HelpCenterPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // FAQs for the help center
  const faqs = [
    {
      id: '1',
      question: 'How do I access my tickets?',
      answer:
        "You can access your tickets by navigating to the My Events section. There you'll find all your registered events and their associated tickets.",
    },
    {
      id: '2',
      question: 'How do I purchase a ticket?',
      answer:
        'To purchase a ticket, navigate to the event details page and click on the "Book Now" button. Follow the instructions to complete your purchase.',
    },
    {
      id: '3',
      question: 'Can I get a refund or exchange my ticket?',
      answer:
        'Refund policies vary by event. Please check the event details page for specific refund information or contact the event organizer directly.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-6 px-4">
        <h1 className="text-2xl font-bold text-center">Help Center</h1>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <h2 className="text-lg mb-2">Hi Ridwan, what kind of help do you need?</h2>
        <Input
          type="search"
          placeholder="Write your question here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          className="w-full"
        />
      </div>

      {/* Help Categories */}
      <div className="px-4 mb-6">
        <h3 className="text-lg font-medium mb-3">Select a help topic</h3>
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-3 flex flex-col items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs">General</span>
          </Card>

          <Card className="p-3 flex flex-col items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2"
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
            <span className="text-xs">Account</span>
          </Card>

          <Card className="p-3 flex flex-col items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span className="text-xs">Order</span>
          </Card>

          <Card className="p-3 flex flex-col items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span className="text-xs">Payment</span>
          </Card>

          <Card className="p-3 flex flex-col items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs">Reschedule</span>
          </Card>

          <Card className="p-3 flex flex-col items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs">Other</span>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 mb-20">
        <h3 className="text-lg font-bold mb-3">FAQ</h3>
        <Accordion>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              title={faq.question}
              classNames={{
                title: 'text-base',
                content: 'text-sm text-gray-600',
              }}
            >
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="flex justify-around items-center">
          <Link href="/" className="flex flex-col items-center text-gray-500">
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs mt-1">Home</span>
          </Link>

          <Link href="/events" className="flex flex-col items-center text-gray-500">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-xs mt-1">Events</span>
          </Link>

          <Link href="/my-events" className="flex flex-col items-center text-gray-500">
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs mt-1">My Events</span>
          </Link>

          <Link href="/profile" className="flex flex-col items-center text-gray-500">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
