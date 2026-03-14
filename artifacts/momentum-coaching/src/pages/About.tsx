import { Award, BookOpen, Target, Users } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { usePageTitle } from "@/hooks/use-page-title";
import { SITE } from "@/config/siteConfig.js";

export default function About() {
  usePageTitle("About Us");

  return (
    <div className="min-h-screen bg-white pb-24">
      <PageHeader 
        title="About Momentum" 
        subtitle="A legacy of educational excellence, shaping the minds of tomorrow." 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src={`${import.meta.env.BASE_URL}images/about-institute.png`} 
                alt="Institute Building" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-3xl z-0" />
            
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <div className="text-4xl font-extrabold text-primary mb-1">{new Date().getFullYear() - parseInt(SITE.foundedYear)}+</div>
              <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">Years of<br/>Excellence</div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Welcome to {SITE.instituteName}</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed text-justify">
              Established in {SITE.foundedYear}, {SITE.instituteName} has emerged as a premier coaching institution in {SITE.location}. We are dedicated to providing the highest quality education and comprehensive preparation for competitive examinations like JEE Main, JEE Advanced, NEET, and MHT-CET.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed text-justify">
              Our philosophy goes beyond traditional teaching. We believe in mentoring students, identifying their unique strengths, and addressing their weaknesses to help them achieve their maximum potential. With a team of highly qualified faculty and a rigorous academic curriculum, we have consistently produced top ranks in various state and national level examinations.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Target size={24} className="text-primary" />
                </div>
                <div className="font-bold text-slate-900">Result Oriented</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Users size={24} className="text-primary" />
                </div>
                <div className="font-bold text-slate-900">Expert Faculty</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-slate-950 text-white p-10 md:p-14 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />
            <BookOpen size={48} className="text-primary mb-6 relative z-10" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="text-slate-300 text-lg leading-relaxed relative z-10">
              To impart quality education with a strong foundation of concepts, empowering students to excel in competitive exams while instilling ethical values and confidence to face global challenges.
            </p>
          </div>
          
          <div className="bg-primary text-white p-10 md:p-14 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150" />
            <Award size={48} className="text-white mb-6 relative z-10" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">Our Vision</h3>
            <p className="text-primary-foreground/90 text-lg leading-relaxed relative z-10">
              To be the most trusted educational institution that creates a conducive environment for learning, innovating, and building the careers of thousands of aspiring doctors and engineers.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
