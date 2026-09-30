"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import dynamic from "next/dynamic";

// WorkTogetherModal is dynamically imported and loaded ONLY when requested by user interaction
const WorkTogetherModal = dynamic(
  () => import("@/components/ui/WorkTogetherModal"),
  { ssr: false }
);

interface ContactModalContextType {
  openContactModal: (service?: string) => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
  openContactModal: () => {},
  closeContactModal: () => {},
});

export const useContactModal = () => useContext(ContactModalContext);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(
    "Content Creation & Strategic Scripting"
  );

  const openContactModal = useCallback((service?: string) => {
    if (service) setSelectedService(service);
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactModalContext.Provider value={{ openContactModal, closeContactModal }}>
      {children}
      {isOpen && (
        <WorkTogetherModal
          isOpen={isOpen}
          onClose={closeContactModal}
          prefilledService={selectedService}
        />
      )}
    </ContactModalContext.Provider>
  );
}
