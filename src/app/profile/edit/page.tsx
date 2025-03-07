// src/app/profile/edit/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Radio,
  RadioGroup,
} from '@heroui/react';

export default function EditProfilePage() {
  // Profile data state
  const [profileData, setProfileData] = useState({
    name: 'Ridwan Soleh',
    email: 'dpopstudio@gmail.com',
    phone: '0812 3456 7890',
    nationality: 'Indonesia',
    gender: 'male',
    address: 'Serang, Indonesia',
  });

  // Profile picture modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle gender selection
  const handleGenderChange = (value: string) => {
    setProfileData((prev) => ({ ...prev, gender: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the actual form submission to update the profile
    console.log('Profile data to save:', profileData);
    // Redirect back to profile
    window.location.href = '/profile';
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
        <h1 className="text-xl font-bold">Change Profile Data</h1>
      </div>

      {/* Profile Picture Change */}
      <div className="p-4 flex flex-col items-center mb-6">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
            <Image
              src="/images/user-avatar.png"
              alt="Profile picture"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <button
            className="absolute bottom-0 right-0 bg-primary-500 rounded-full p-1"
            onClick={onOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Profile Picture Change Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Change Profile Picture</ModalHeader>
          <ModalBody>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-6">
                <Image
                  src="/images/user-avatar.png"
                  alt="Profile picture"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <Button color="primary" variant="flat" fullWidth className="mb-2">
                Browse
              </Button>
              <Button color="default" variant="flat" fullWidth onClick={onClose}>
                Save Picture
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="px-4 py-2 space-y-4">
        <div>
          <Input
            type="text"
            label="Your Name"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            variant="bordered"
            isRequired
          />
        </div>

        <div>
          <Input
            type="email"
            label="Email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            variant="bordered"
            isRequired
          />
        </div>

        <div>
          <Input
            type="tel"
            label="Phone Number"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
            variant="bordered"
          />
        </div>

        <div>
          <Input
            type="text"
            label="Nationality"
            name="nationality"
            value={profileData.nationality}
            onChange={handleChange}
            variant="bordered"
          />
        </div>

        <div>
          <p className="text-sm mb-2">Gender</p>
          <RadioGroup
            value={profileData.gender}
            onValueChange={handleGenderChange}
            orientation="horizontal"
          >
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </RadioGroup>
        </div>

        <div>
          <Input
            type="text"
            label="Address"
            name="address"
            value={profileData.address}
            onChange={handleChange}
            variant="bordered"
          />
        </div>

        <Button type="submit" color="primary" fullWidth size="lg" className="mt-8">
          Save
        </Button>
      </form>
    </div>
  );
}
