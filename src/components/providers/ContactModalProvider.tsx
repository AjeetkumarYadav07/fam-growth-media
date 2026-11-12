"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
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

  // Per-load refs reset automatically on page refresh (never persisted in localStorage)
  const isOpenRef = useRef(false);
  const hasTriggered30Ref = useRef(false);
  const hasTriggeredFooterRef = useRef(false);
  const hasSubmittedRef = useRef(false);
  const footerVisibleRef = useRef(false);

  const openContactModal = useCallback((service?: string) => {
    if (service) setSelectedService(service);
    isOpenRef.current = true;
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    isOpenRef.current = false;
    setIsOpen(false);
    // Once dismissed at the footer, suppress all further auto-popups until page refresh
    if (footerVisibleRef.current || hasTriggeredFooterRef.current) {
      hasTriggered30Ref.current = true;
      hasTriggeredFooterRef.current = true;
    }
  }, []);

  const markSubmitted = useCallback(() => {
    hasSubmittedRef.current = true;
    hasTriggered30Ref.current = true;
    hasTriggeredFooterRef.current = true;
  }, []);

  const notifyFooterVisible = useCallback((isVisible: boolean) => {
    footerVisibleRef.current = isVisible;
    if (!isVisible) return;
    if (hasTriggeredFooterRef.current || hasSubmittedRef.current || isOpenRef.current) {
      return;
    }

    hasTriggeredFooterRef.current = true;
    hasTriggered30Ref.current = true;
    isOpenRef.current = true;
    setIsOpen(true);
  }, []);

  useEffect(() => {
    let isReady = false;
    const readyTimer = window.setTimeout(() => {
      isReady = true;
    }, 300);

    const handleScroll = () => {
      if (!isReady) return;
      if (hasTriggered30Ref.current || hasSubmittedRef.current || isOpenRef.current) {
        return;
      }

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const progress = window.scrollY / scrollableHeight;
      if (progress >= 0.3) {
        hasTriggered30Ref.current = true;
        isOpenRef.current = true;
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.clearTimeout(readyTimer);
      window.removeEventListener("scroll", handleScroll);
    };
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
