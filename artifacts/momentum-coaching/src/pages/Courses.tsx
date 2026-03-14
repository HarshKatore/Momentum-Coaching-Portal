import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, BookOpen, Clock, Target, MessageCircle, Phone } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { usePageTitle } from "@/hooks/use-page-title";
import coursesData from "@/data/courses.json";
import { CONTACT, SITE } from "@/config/siteConfig.js";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Courses() {
  usePageTitle("Our Courses");

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <PageHeader 
        title="Our Training Programs" 
        subtitle="Comprehensive coaching programs meticulously designed to ensure success in board and competitive examinations." 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {coursesData.map((course) => (
            <motion.div 
              key={course.id} 
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="p-8 pb-6 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-3xl shadow-inner">
                    {course.icon}
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider border border-slate-200">
                    {course.badge}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">{course.name}</h3>
                
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Target size={16} className="text-primary" />
                    <span className="font-medium">Target:</span> {course.targetExam}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock size={16} className="text-primary" />
                    <span className="font-medium">Duration:</span> {course.duration}
                  </div>
                  <div className="flex items-start gap-2 text-sm text-slate-600 mt-1">
                    <BookOpen size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{course.subjects.join(", ")}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-6 flex-grow flex flex-col bg-slate-50/50">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Key Features</h4>
                <ul className="space-y-3 mb-8 flex-grow">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors text-sm shadow-md"
                  >
                    <MessageCircle size={18} /> Chat
                  </a>
                  <a 
                    href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors text-sm shadow-md"
                  >
                    <Phone size={18} /> Call
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
