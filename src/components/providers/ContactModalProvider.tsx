"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
} from "react";
import dynamic from "next/dynamic";

// WorkTogetherModal is dynamically imported and loaded ONLY when requested by user interaction
const WorkTogetherModal = dynamic(
  () => import("@/components/ui/WorkTogetherModal"),
  { ssr: false }
);

interface ContactModalContextType {
  openContactModal: (service?: string) => void;
  closeContactModal: () => void;
  notifyFooterVisible: (isVisible: boolean) => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
  openContactModal: () => {},
  closeContactModal: () => {},
  notifyFooterVisible: () => {},
});

export const useContactModal = () => useContext(ContactModalContext);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(
    "Content Creation & Strategic Scripting"
  );

  // In-memory per-load refs: reset automatically on website refresh
  const isOpenRef = useRef(false);
  const hasTriggeredFooterRef = useRef(false);
  const hasSubmittedRef = useRef(false);

  // Manual trigger from CTA buttons (always allowed)
  const openContactModal = useCallback((service?: string) => {
    if (service) setSelectedService(service);
    isOpenRef.current = true;
    setIsOpen(true);
  }, []);

  // When user cuts/closes the modal, suppress any further auto-popups until website refresh
  const closeContactModal = useCallback(() => {
    isOpenRef.current = false;
    setIsOpen(false);
    hasTriggeredFooterRef.current = true;
  }, []);

  const markSubmitted = useCallback(() => {
    hasSubmittedRef.current = true;
    hasTriggeredFooterRef.current = true;
  }, []);

  // Automatic trigger: pop open only 1 time when user reaches the bottom / footer
  const notifyFooterVisible = useCallback((isVisible: boolean) => {
    if (!isVisible) return;
    if (hasTriggeredFooterRef.current || hasSubmittedRef.current || isOpenRef.current) {
      return;
    }

    hasTriggeredFooterRef.current = true;
    isOpenRef.current = true;
    setIsOpen(true);
  }, []);

  return (
    <ContactModalContext.Provider
      value={{ openContactModal, closeContactModal, notifyFooterVisible }}
    >
      {children}
      {isOpen && (
        <WorkTogetherModal
          isOpen={isOpen}
          onClose={closeContactModal}
          onSubmitted={markSubmitted}
          prefilledService={selectedService}
        />
      )}
    </ContactModalContext.Provider>
  );
}
