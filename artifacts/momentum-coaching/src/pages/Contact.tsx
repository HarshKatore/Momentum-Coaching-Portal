import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { usePageTitle } from "@/hooks/use-page-title";
import { CONTACT } from "@/config/siteConfig.js";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  usePageTitle("Contact Us");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for static site
    setTimeout(() => {
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message Sent Successfully!",
        description: "Our counseling team will get back to you shortly.",
        variant: "default",
        action: <CheckCircle2 className="text-green-500" />,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <PageHeader 
        title="Get in Touch" 
        subtitle="Have questions about admissions or courses? We're here to help." 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600 leading-relaxed">{CONTACT.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Phone Number</h4>
                    <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="text-slate-600 hover:text-primary transition-colors text-lg">
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email Address</h4>
                    <a href={`mailto:${CONTACT.email}`} className="text-slate-600 hover:text-primary transition-colors text-lg break-all">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
              
              <hr className="my-8 border-slate-100" />
              
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Office Hours</h4>
                <p className="text-slate-600 flex justify-between border-b border-slate-100 py-2">
                  <span>Monday - Saturday</span>
                  <span className="font-medium text-slate-900">8:00 AM - 8:00 PM</span>
                </p>
                <p className="text-slate-600 flex justify-between py-2">
                  <span>Sunday</span>
                  <span className="font-medium text-slate-900">9:00 AM - 1:00 PM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-200">
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Send us a Message</h3>
              <p className="text-slate-500 mb-8">Fill out the form below and we will contact you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="course" className="text-sm font-semibold text-slate-700">Interested Course</label>
                    <select 
                      id="course" 
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-colors appearance-none"
                    >
                      <option value="">Select a Course</option>
                      <option value="jee">JEE Main + Advanced</option>
                      <option value="neet">NEET UG</option>
                      <option value="mhtcet">MHT-CET</option>
                      <option value="foundation">Class 11/12 Foundation</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  {!isSubmitting && <Send size={20} />}
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
