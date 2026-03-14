import { MessageCircle, Phone } from "lucide-react";
import { CONTACT, SITE } from "@/config/siteConfig.js";

export default function FloatingContact() {
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
  const phoneUrl = `tel:${CONTACT.phone.replace(/\s+/g, '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone Button */}
      <a
        href={phoneUrl}
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative"
        aria-label="Call Us"
      >
        <Phone size={24} className="group-hover:animate-pulse" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
