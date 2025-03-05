// src/components/events/EventOrderDetail.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Button, 
  Card, 
  CardBody, 
  Divider 
} from "@heroui/react";

interface EventOrderDetailProps {
  event: {
    id: string;
    name: string;
    picture: string;
    startAt: string;
    endAt: string;
    location?: string;
  };
  selectedPackage: {
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
  };
}

const EventOrderDetail: React.FC<EventOrderDetailProps> = ({ event, selectedPackage }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };
  
  // Format time for display
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  // Calculate total with fees and taxes
  const tax = Math.round(selectedPackage.price * 0.09);
  const fee = 1;
  const total = selectedPackage.price + tax + fee;

  const handlePlaceOrder = () => {
    setIsLoading(true);
    // Here you would handle the payment processing
    setTimeout(() => {
      // Simulate API call delay
      setIsLoading(false);
      alert('Order placed successfully!');
      // Redirect to confirmation page or show confirmation modal
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 flex items-center">
        <Link href={`/events/${event.id}`} className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-xl font-bold">Detail Order</h1>
      </header>

      <main className="p-4">
        {/* Event Preview Card */}
        <Card className="bg-gray-800 border-none mb-6">
          <CardBody className="p-4">
            <div className="flex items-center">
              <div className="relative h-20 w-32 mr-4 rounded-lg overflow-hidden">
                <Image 
                  src={event.picture} 
                  alt={event.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                  30 APRIL
                </div>
              </div>
              <div>
                <h2 className="font-bold text-white">{event.name}</h2>
                <p className="text-xs text-gray-300">
                  {formatDate(event.startAt)} - {event.location}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-xs text-gray-400">Time</p>
                <p className="font-medium">{formatTime(event.startAt)} - {formatTime(event.endAt)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Gate</p>
                <p className="font-medium">A21</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-gray-400">Package</p>
                <p className="font-medium">{selectedPackage.name} - {selectedPackage.description}</p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Order Summary Card */}
        <Card className="bg-gray-800 border-none mb-6">
          <CardBody className="p-4">
            <h2 className="font-bold text-lg mb-4">Order Summary</h2>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{selectedPackage.name}</span>
              <span className="font-medium">${selectedPackage.price}</span>
            </div>
            
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Tax</span>
              <span className="font-medium">${tax}</span>
            </div>
            
            <div className="flex justify-between mb-4">
              <span className="text-gray-300">Fees</span>
              <span className="font-medium">${fee}</span>
            </div>
            
            <Divider className="my-4 bg-gray-700" />
            
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold text-lg">${total}</span>
            </div>
          </CardBody>
        </Card>

        {/* Payment Method Card */}
        <Card className="bg-gray-800 border-none mb-10">
          <CardBody className="p-4">
            <h2 className="font-bold text-lg mb-4">Payment Method</h2>
            
            <div className="bg-gray-700 rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-white p-1 rounded mr-3">
                  <Image 
                    src="/images/visa-logo.png" 
                    alt="Visa Card" 
                    width={40} 
                    height={25}
                  />
                </div>
                <div>
                  <p className="font-medium">Visa Card Travel</p>
                  <p className="text-xs text-gray-400">5233 4212 7255 XXXX</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </CardBody>
        </Card>

        {/* Action Buttons */}
        <Button
          color="primary"
          size="lg"
          className="w-full py-4 mt-4 bg-teal-500 hover:bg-teal-600"
          isLoading={isLoading}
          onPress={handlePlaceOrder}
        >
          Place Order
        </Button>
      </main>
    </div>
  );
};

export default EventOrderDetail;