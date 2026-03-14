import { Link } from "wouter";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { SITE, CONTACT } from "@/config/siteConfig.js";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 inline-block">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight">
                  Momentum
                </span>
                <span className="text-[10px] tracking-widest text-primary/80 uppercase leading-none">
                  Coaching Institute
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              {SITE.tagline}. Dedicated to providing the highest quality
              education for JEE, NEET, and Board examinations.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Courses", href: "/courses" },
                { name: "Faculty Setup", href: "/faculty" },
                { name: "Photo Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-primary transition-colors group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-primary/50 group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              Top Programs
            </h3>
            <ul className="space-y-3">
              {[
                { name: "JEE Main + Advanced", href: "/courses" },
                { name: "NEET UG Preparation", href: "/courses" },
                { name: "MHT-CET Target", href: "/courses" },
                { name: "Class 11 & 12 Foundation", href: "/courses" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-primary transition-colors group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-primary/50 group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-primary after:rounded-full">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-sm leading-relaxed">
                  {CONTACT.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm hover:text-primary transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm text-center md:flex md:justify-between md:text-left">
          <p>
            &copy; {currentYear} {SITE.instituteName}. All rights reserved.
          </p>
          <div className="mt-2 md:mt-0 space-y-1">
            <p>Designed with excellence for future leaders.</p>
            <p className="text-white font-medium">
              Developed by{" "}
              <a
                href="tel:7887652294"
                className="text-primary hover:text-primary/80 transition-colors font-semibold underline decoration-primary/50 hover:decoration-primary"
              >
                Harsh Katore
              </a>{" "}
              <span className="text-slate-400">(7887652294)</span> | Connect on
              WhatsApp/Call
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
