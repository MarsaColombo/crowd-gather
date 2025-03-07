// src/components/events/EventCameraButton.tsx
'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';

interface EventCameraButtonProps {
  eventId: string;
}

const EventCameraButton: React.FC<EventCameraButtonProps> = ({ eventId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  const openCamera = async () => {
    setIsOpen(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      mediaStreamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setCapturedImage(null);
      setUploadSuccess(false);
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please check your permissions.');
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        // Set canvas dimensions to match video
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Draw video frame to canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Convert canvas to data URL
        const imageDataUrl = canvas.toDataURL('image/jpeg');
        setCapturedImage(imageDataUrl);
      }
    }
  };

  const resetCamera = () => {
    setCapturedImage(null);
  };

  const closeCamera = () => {
    // Stop all media streams
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    setIsOpen(false);
    setCapturedImage(null);
    setUploadSuccess(false);
  };

  const uploadImage = async () => {
    if (!capturedImage) return;

    try {
      setUploading(true);

      // In a real implementation, you would create a FormData object and upload to your server/Cloudinary
      // Example:
      // const formData = new FormData();
      // formData.append('file', dataURLtoBlob(capturedImage));
      // formData.append('eventId', eventId);
      // const response = await fetch('/api/upload', { method: 'POST', body: formData });

      // For this example, simulate a loading delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate successful upload
      setUploadSuccess(true);
      setUploading(false);

      // Close modal after a short delay
      setTimeout(() => {
        closeCamera();
      }, 1500);
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploading(false);
      alert('Error uploading the image. Please try again.');
    }
  };

  // Helper function to convert Data URL to Blob
  const dataURLtoBlob = (dataURL: string) => {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], { type: mime });
  };

  return (
    <>
      <Button
        color="primary"
        startContent={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
        }
        onPress={openCamera}
      >
        Take Photo
      </Button>

      <Modal isOpen={isOpen} onClose={closeCamera} size="lg">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {capturedImage ? 'Photo Preview' : 'Take a Photo'}
          </ModalHeader>
          <ModalBody>
            {capturedImage ? (
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={capturedImage}
                  alt="Captured"
                  fill
                  className="object-contain"
                  unoptimized // Required for data URLs
                />
              </div>
            ) : (
              <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
              </div>
            )}

            {/* Hidden canvas for capturing images */}
            <canvas ref={canvasRef} className="hidden" />
          </ModalBody>
          <ModalFooter>
            {capturedImage ? (
              <>
                <Button
                  color="default"
                  variant="light"
                  onPress={resetCamera}
                  isDisabled={uploading}
                >
                  Retake
                </Button>
                <Button
                  color="primary"
                  onPress={uploadImage}
                  isLoading={uploading}
                  isDisabled={uploadSuccess}
                >
                  {uploadSuccess ? 'Uploaded!' : 'Share'}
                </Button>
              </>
            ) : (
              <>
                <Button color="default" variant="light" onPress={closeCamera}>
                  Cancel
                </Button>
                <Button color="primary" onPress={captureImage}>
                  Capture
                </Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EventCameraButton;
