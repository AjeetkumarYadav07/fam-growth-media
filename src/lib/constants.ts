/**
 * Centralized Application Constants
 */

export const WHATSAPP_PHONE_DISPLAY = "+91 75793 67460";
export const WHATSAPP_PHONE_NUMBER = "917579367460";
export const WHATSAPP_DEFAULT_MESSAGE = "Hello FAM Growth Media , I want to Grow ";

/**
 * Universal WhatsApp direct chat URL with pre-filled message
 */
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_DEFAULT_MESSAGE
)}`;

/**
 * Helper to generate WhatsApp links with custom text if needed
 */
export function getWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
