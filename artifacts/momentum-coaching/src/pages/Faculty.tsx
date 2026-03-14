import { motion } from "framer-motion";
import { GraduationCap, Award, Book } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { usePageTitle } from "@/hooks/use-page-title";
import facultyData from "@/data/faculty.json";

export default function Faculty() {
  usePageTitle("Expert Faculty");

  return (
    <div className="min-h-screen bg-white pb-24">
      <PageHeader 
        title="Our Expert Faculty" 
        subtitle="Learn from the best minds who are passionate about teaching and dedicated to your success." 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {facultyData.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] mb-6 shadow-md border border-border">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                    <div className="w-24 h-24 rounded-full bg-slate-400/50 flex items-center justify-center text-4xl font-bold text-slate-500">
                      {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                  </div>
                )}
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded shadow-lg">
                    {member.specialization}
                  </span>
                </div>
              </div>
              
              <div className="px-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.subject}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <GraduationCap size={16} className="text-slate-400" />
                    <span>{member.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Award size={16} className="text-slate-400" />
                    <span>{member.experience} Experience</span>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  "{member.bio}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
